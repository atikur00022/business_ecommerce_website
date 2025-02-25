import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

const AdminSidebar = () => {



    return (
        <section className="adminSidebar py-3 bg-light">
            <div className="container">
                {/* Dashboard Summary */}
                <div className="mb-1">
                    <NavLink to="/admindashboard"
                             className={({isActive}) => `list-group-item ${isActive ? 'adminActive' : 'pending'}`}>
                        <span>Dashboard Summary </span>
                    </NavLink>
                </div>


            </div>
        </section>
    );
};

export default AdminSidebar;