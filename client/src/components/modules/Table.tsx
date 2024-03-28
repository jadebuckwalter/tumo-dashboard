import React, { useEffect, useState } from "react";

type Props = {
    state: String;
    setState: Function;
};

const Table = ({ state, setState }: Props) => {
    // const res = get("/api/all-students"); //.then((result) => {return result});
    // console.log("res", res.then((result) => setTable(result)));
    return (
        <div>
            {state}
        </div>
    );
}

export default Table;