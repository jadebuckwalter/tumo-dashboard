import React, { useState } from "react";
import NavBar from "../modules/NavBar";
import Search from "../modules/Search";
import Profile from "../modules/Profile";

const Edit = () => {
    const [student, setStudent] = useState([]);

    return (
        <div>
            <h1 className="text-6xl p-5 text-center">Edit Profile</h1>
            <NavBar/>
            <Search searchBy={"username"} setStudent={setStudent}/>
            <div id="editProfile" style={{display: "none"}}>
                <Profile formType="edit" student={student}/>
            </div>
        </div>
    );
}

export default Edit;