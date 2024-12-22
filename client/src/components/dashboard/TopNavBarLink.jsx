import React from 'react';
import {NavLink} from "react-router-dom";

const TopNavBarLink = () => {
    return (
        <>
            <ul className="list-group">
                <NavLink
                    to="/topnavbar"
                    className={({isActive}) => `list-group-item ${isActive ? 'active' : 'pending'}`}
                >
                    Top Navbar
                </NavLink>
                <NavLink
                    to="/navbar"
                    className={({isActive}) => `list-group-item ${isActive ? 'active' : 'pending'}`}
                >
                    NavBar
                </NavLink>
                <NavLink
                    to="/menu"
                    className={({isActive}) => `list-group-item ${isActive ? 'active' : 'pending'}`}
                >
                    Menu
                </NavLink>
            </ul>
        </>
    );
};

export default TopNavBarLink;