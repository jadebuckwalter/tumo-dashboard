import React, { useEffect, useState } from "react";
import { post } from "../../utils.ts";
import NavBar from "../modules/NavBar.tsx";
import Table from "../modules/Table.tsx";
import Search from "../modules/Search.tsx";

const Display = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        post("/api/all-students", []).then((d) => {setData(d)});
    }, []);
    
    return (
        <div>
            <h1 className="text-6xl p-5 text-center">Display Profiles</h1>
            <NavBar/>
            <Search searchBy={"full name"} setId={() => {}}/>
            <Table data={data} hasHeading={true}/>
        </div>
    );
}

export default Display;