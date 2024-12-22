import React from 'react';
import {NavLink} from "react-router-dom";

const AllUsersLink = () => {
    return (
        <>
            <ul className="list-group">
                <NavLink
                    to="/adminlists"
                    className={({isActive}) => `list-group-item ${isActive ? 'active' : 'pending'}`}
                >
                    Admins Lists
                </NavLink>
                <NavLink
                    to="/employeelists"
                    className={({isActive}) => `list-group-item ${isActive ? 'active' : 'pending'}`}
                >
                    Employee Lists
                </NavLink>
                <NavLink
                    to="/userlists"
                    className={({isActive}) => `list-group-item ${isActive ? 'active' : 'pending'}`}
                >
                    Users Lists
                </NavLink>
                <NavLink
                    to="/banneduserlists"
                    className={({isActive}) => `list-group-item ${isActive ? 'active' : 'pending'}`}
                >
                    Banned Users Lists
                </NavLink>
            </ul>
        </>
    );
};

export default AllUsersLink;