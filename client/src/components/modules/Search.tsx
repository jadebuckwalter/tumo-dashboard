import React, { useEffect, useRef, useState } from "react";
import { post } from "../../utils";

type Props = {
    searchBy: string;
}

// Change everything to be in uppercase
const Search = ({searchBy}: Props) => {
    const [name, setName] = useState("");
    const [student, setStudent] = useState({});

    const processInput = () => {
        if (searchBy === "username") {
            post("/api/search-username", {username: name}).then((s) => {console.log(s); setStudent(s)});
        } else if (searchBy === "full name") {
            post("/api/search-name", {name: name}).then((s) => {setStudent(s)});
        }
    };

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={async (e) => {
                e.preventDefault();
                await processInput();
                console.log(student);
            }}>
                <div className="p-2">
                    <label className="m-1">Search by {searchBy}:</label>
                    <input className="border-2 border-slate-300 rounded m-1" type="text" name="search" id="search" value={name} onChange={(e) => {setName(e.target.value)}} required></input>
                    <input className="border-2 border-slate-500 rounded px-1 m-1 cursor-pointer" type="submit" value="Enter"></input>
                </div>
            </form>
        </div>
    );
};

export default Search;
