import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/images/plainb-logo.svg";

const DashboardHeader = () => {
    return (
        <section className="navbar dashboard-header py-3 bg-light">
            <div className="container">
                <div className="row w-100">
                    <div className="logo d-flex align-items-center col-12 col-lg-4">
                        <div className="image">
                            <Link to='/'>
                                <img className="img-fluid w-25" src={logo} alt="PlainB Logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="fix-margin d-flex align-items-center col-12 col-lg-4">
                        <div className="search d-flex align-items-center">
                            <input type="text" className="form-control mx-2" placeholder="Search"/>
                            <button className="btn btn-success">Search</button>
                        </div>
                    </div>
                    <div className="fix-margin d-flex align-items-center justify-content-lg-end col-12 col-lg-4">
                        <div className="person-account d-flex align-items-center m-auto mt-2 mt-lg-0">
                            <div className="dropdown">
                                <div className="dropdown-toggle"
                                     data-bs-toggle="dropdown" aria-expanded="false">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                                </div>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardHeader;