import React, { useState, useEffect } from "react";
import { post } from "../../utils";

// Form type is either "create" or "edit"
type Props = {
    formType: string;
    student: Array<JSON>;
}

const Profile = ({formType, student}: Props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState(0);
    
    // Fill in the values for the student in the profile, if applicable
    useEffect(() => {
        if (formType === "edit" && student.length > 0) {
            const vals = Object.values(student[0]);
            setId(vals[0]);
            setFirst(vals[1]);
            setLast(vals[2]);
            setUsername(vals[3]);
            setPassword(vals[4]);
            setEmail(vals[5]);
        }
    }, [student]);

    return (
        <div>
            <div className="text-center p-2 text-green-500" style={{display: "none"}} id="submitted">Submitted!</div>
            <div className="flex flex-col items-center border-2 border-slate-500 rounded-lg p-6 m-8">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    // Submit form
                    if (formType === "create") {
                        post("/api/create-profile", {first: first, last: last, username: username, password: password, email: email});
                    } else if (formType === "edit") {
                        post("/api/edit-profile", {first: first, last: last, username: username, password: password, email: email, id: id});
                    }
                    // Show confirmation
                    const confirmation = document.getElementById("submitted");
                    if (confirmation !== null) {
                        confirmation.style.display = "block";
                    }
                    // Clear fields
                    setFirst("");
                    setLast("");
                    setEmail("");
                    setUsername("");
                    setPassword("");
                    setId(0);
                }}>
                    <div className="p-2">
                        <label htmlFor="first">First name: </label>
                        <input className="border-2 border-slate-300 rounded" type="text" name="first" id="first" value={first} onChange={(e) => {setFirst(e.target.value)}} required></input>
                    </div>
                    <div className="p-2">
                        <label htmlFor="last">Last name: </label>
                        <input className="border-2 border-slate-300 rounded" type="text" name="last" id="last" value={last} onChange={(e) => {setLast(e.target.value)}} required></input>
                    </div>
                    <div className="p-2">
                        <label htmlFor="user">Username: </label>
                        <input className="border-2 border-slate-300 rounded" type="text" name="user" id="user" value={username} onChange={(e) => {setUsername(e.target.value)}} required></input>
                    </div>
                    <div className="p-2">
                        <label htmlFor="email">Email: </label>
                        <input className="border-2 border-slate-300 rounded" type="text" name="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required></input>
                    </div>
                    <div className="p-2">
                        <label htmlFor="pass">Password: </label>
                        <input className="border-2 border-slate-300 rounded" type="text" name="pass" id="pass" value={password} onChange={(e) => {setPassword(e.target.value)}} required></input>
                    </div>
                    <div className="p-2">
                        <input className="border-2 border-slate-500 rounded px-1 cursor-pointer" type="submit" value="Submit"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
