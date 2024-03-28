import React from "react";
import NavBar from "../modules/NavBar";

const Home = () => {
    return (
        <div>
            <h1 className="text-6xl p-5 text-center">TUMO Dashboard</h1>
            <NavBar/>
            <p className="p-5 text-center">Welcome to TUMO Dashboard! Here, you can create, edit, and display student profiles.</p>
        </div>
    );
}

export default Home;