import React from "react";

// The navigation bar at the top of all pages. Takes no props.
const Profile = () => {
    return (
        <div className="flex flex-col items-center border-2 border-slate-500 rounded-lg p-6 m-8">
            <form action="" method="post">
                <div className="p-2">
                    <label htmlFor="first">First name: </label>
                    <input className="border-2 border-slate-300 rounded" type="text" name="first" id="first" required></input>
                </div>
                <div className="p-2">
                    <label htmlFor="last">Last name: </label>
                    <input className="border-2 border-slate-300 rounded" type="text" name="last" id="last" required></input>
                </div>
                <div className="p-2">
                    <label htmlFor="user">Username: </label>
                    <input className="border-2 border-slate-300 rounded" type="text" name="user" id="user" required></input>
                </div>
                <div className="p-2">
                    <label htmlFor="email">Email: </label>
                    <input className="border-2 border-slate-300 rounded" type="text" name="email" id="email" required></input>
                </div>
                <div className="p-2">
                    <label htmlFor="pass">Password: </label>
                    <input className="border-2 border-slate-300 rounded" type="text" name="pass" id="pass" required></input>
                </div>
                <div className="p-2">
                    <input className="border-2 border-slate-500 rounded px-1 cursor-pointer" type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    );
};

export default Profile;
