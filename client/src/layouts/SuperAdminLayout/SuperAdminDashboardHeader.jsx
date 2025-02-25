import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/images/plainb-logo.svg";
import OffcanvasSidebar from "../OffcanvasSidebar.jsx";
import SuperAdminSideBar from "./SuperAdminSideBar.jsx";
import {LuUserRound} from "react-icons/lu";
import {AiOutlineLogout} from "react-icons/ai";
import {LogoutRequest} from "../../ApiRequest/Users/UsersApiRequest.js";

const SuperAdminDashboardHeader = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLogout = async () => {
        await LogoutRequest();
    }

    return (
        <section className="dashboard-header py-3 shadow-sm">
            <div className="container">
                <div className="row w-100">
                    <div className="logo d-flex align-items-center col-6 gap-3">
                        {isMobile && <OffcanvasSidebar /> }
                        <div className="image">
                            <Link to='/superadmindashboard'>
                                <img className="img-fluid" src={logo} alt="PlainB Logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="fix-margin d-flex align-items-center justify-content-end col-6">

                        <div className="profile">
                            <div className="dropdown-toggle" data-bs-toggle="dropdown"
                                 aria-expanded="false">
                                <img
                                    alt="profile-image"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                            </div>
                            <ul className="dropdown-menu dropdown-menu-light shadow mt-1 pb-3">
                                <div className="text-center mt-3">
                                    <img
                                        alt="profile-image"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                                        <h5 className="mt-2">Jhon Doe</h5>
                                </div>
                                <hr/>
                                <div className="d-flex align-items-center mx-3 mt-2">
                                    <LuUserRound/>
                                    <li><Link to='/profile' className="dropdown-item">Profile</Link></li>
                                </div>
                                <div className="d-flex align-items-center mx-3 mt-2">
                                    <AiOutlineLogout/>
                                    <li><span onClick={handleLogout} className="dropdown-item">Logout</span></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuperAdminDashboardHeader;