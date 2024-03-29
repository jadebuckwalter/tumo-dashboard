import React, { useState } from "react";
import { post } from "../../utils";

type Props = {
    searchBy: string;
    setStudent: Function;
}

const Search = ({searchBy, setStudent}: Props) => {
    const [name, setName] = useState("");

    const processInput = () => {
        if (searchBy === "username") {
            post("/api/search-username", {username: name}).then((s) => {
                setStudent(s);
                checkFound(s);
            });
        } else if (searchBy === "full name") {
            post("/api/search-name", {name: name}).then((s) => {
                setStudent(s);
                checkFound(s);
            });
        }
    };

    const checkFound = (s) => {
        const notFound = document.getElementById("notFound");
        if (s.length === 0) {
            if (notFound !== null) {
                notFound.style.display = "block";
            }
        } else {
            if (notFound !== null) {
                notFound.style.display = "none";
            }
        }
    }

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={(e) => {
                e.preventDefault();
                processInput();
            }}>
                <div className="p-2">
                    <label className="m-1">Search by {searchBy}:</label>
                    <input className="border-2 border-slate-300 rounded m-1" type="text" name="search" id="search" value={name} onChange={(e) => {setName(e.target.value)}} required></input>
                    <input className="border-2 border-slate-500 rounded px-1 m-1 cursor-pointer" type="submit" value="Enter"></input>
                </div>
            </form>
            <div className="text-center p-2 text-red-500" style={{display: "none"}} id="notFound">User not found; try again.</div>
        </div>
    );
};

export default Search;
