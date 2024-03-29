import React, { useEffect } from "react";

type Props = {
    data: Array<JSON>;
    hasHeading: boolean;
};

const Table = ({data, hasHeading}: Props) => {
    useEffect(() => {
        if (data.length > 0) {
            createTable();
        }
    }, [data]);

    // Create a table to store the data
    const createTable = () => {
        const table = (hasHeading) ? document.getElementById("table") : document.getElementById("tableSmall");
        const numCols = 5;
        const numRows = data.length;

        // If no heading, remove previous rows each time this function is called
        if (!hasHeading) {
            while (table?.lastChild) {
                table.removeChild(table.lastChild);
            }
        }

        // Add each cell to the grid
        for (let i = 0; i < numRows; i++) {
            const row = Object.values(data[i]);
            for (let j = 1; j < numCols + 1; j++) {
                const cell = document.createElement("span");
                const text = document.createTextNode(`${row[j]}`);
                cell.appendChild(text);
                if (table !== null) {
                    table.appendChild(cell);
                }
            }
        }
    }

    return (
        <div>
            {(hasHeading && data.length > 0) && (
                <div className="flex flex-col items-center">
                    <span id="table" className="inline-grid grid-cols-5 gap-4 px-2 py-1 border-2 border-slate-500">
                        <span className="font-bold">First</span>
                        <span className="font-bold">Last</span>
                        <span className="font-bold">Username</span>
                        <span className="font-bold">Password</span>
                        <span className="font-bold">Email</span>
                    </span>
                </div>
            )}
            {(!hasHeading && data.length > 0) && (
                <div className="flex flex-col items-center">
                    <span id="tableSmall" className="inline-grid grid-cols-5 gap-4 px-2 py-1 border-2 border-slate-500"></span>
                </div>
            )}
            {(hasHeading && data.length === 0) && (
                <div className="flex flex-col items-center">No student profiles have been entered.</div>
            )}
        </div>
    );
}

export default Table;