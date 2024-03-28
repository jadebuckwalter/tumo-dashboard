import React, { useEffect, useState } from "react";
import {get} from "../../utils.ts";
import NavBar from "../modules/NavBar.tsx";
import Table from "../modules/Table.tsx";
import Search from "../modules/Search.tsx";

const Display = () => {
    const [table, setTable] = useState("");

    // useEffect(() => {
    //     get("/api/all-students").then((result) => console.log(result));//setTable([result]));
    // });

    return (
        <div>
            <h1 className="text-6xl p-5 text-center">Display Profiles</h1>
            <NavBar/>
            <Search searchBy={"full name"}/>
        </div>
    );
}

export default Display;