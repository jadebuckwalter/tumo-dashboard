import React from "react";
import NavBar from "../modules/NavBar";
import Search from "../modules/Search";
import Profile from "../modules/Profile";

const Edit = () => {
    return (
        <div>
            <h1 className="text-6xl p-5 text-center">Edit Profile</h1>
            <NavBar/>
            <Search searchBy={"username"}/>
            <Profile/>
        </div>
    );
}

export default Edit;