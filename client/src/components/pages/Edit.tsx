import React, { useState } from "react";
import NavBar from "../modules/NavBar";
import Search from "../modules/Search";
import Profile from "../modules/Profile";

const Edit = () => {
    const [id, setId] = useState(0);

    return (
        <div>
            <h1 className="text-6xl p-5 text-center">Edit Profile</h1>
            <NavBar/>
            <Search searchBy={"username"} setId={setId}/>
            <Profile formType="edit" id={id}/>
        </div>
    );
}

export default Edit;