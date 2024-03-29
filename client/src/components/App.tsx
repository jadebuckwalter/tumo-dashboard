import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Create from "./pages/Create.tsx";
import Edit from "./pages/Edit.tsx";
import Display from "./pages/Display.tsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/edit" element={<Edit/>}/>
            <Route path="/display" element={<Display/>}/>
        </Routes>
    );
}

export default App;