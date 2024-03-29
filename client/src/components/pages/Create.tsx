import React from "react";
import NavBar from "../modules/NavBar";
import Profile from "../modules/Profile";

const Create = () => {
    return (
        <div>
            <h1 className="text-6xl p-5 text-center">Create Profile</h1>
            <NavBar/>
            <Profile formType="create" id={0}/>
        </div>
    );
}

export default Create;