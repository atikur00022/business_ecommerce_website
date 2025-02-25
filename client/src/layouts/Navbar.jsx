import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/images/plainb-logo.svg";
import {getLoginStatus, getUserUrl} from "../utility/SessionHelper.js";
import {LogoutRequest} from "../ApiRequest/Users/UsersApiRequest.js";

const Navbar = () => {

    const isLogin = Boolean(getLoginStatus());

    return (
        <section className="navbar py-2 mt-2">
            <div className="container">
                <div className="row w-100">
                    <div className="logo d-flex align-items-center col-12 col-lg-4">
                        <div className="image">
                            <Link to='/'>
                                <img className="img-fluid w-25" src={logo} alt="PlainB Logo" />
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
                        <div className="account-details d-flex">
                            <div className="cart d-flex align-items-center mx-3">
                                <Link to="/cart" type="button" className="btn ms-2 btn-light position-relative"> <i className="bi text-dark bi-bag"></i> </Link>
                                <Link to="/wish" type="button" className="btn ms-2 btn-light d-flex"> <i className="bi text-dark bi-heart"></i> </Link>
                            </div>
                            <div className="person-account d-flex align-items-center">
                                <span className='person mx-2'>
                                    <i className="bi bi-person"></i>
                                </span>
                                <div className="account">
                                    <p className="">Account</p>
                                    {isLogin === true ? (
                                        <Link to={`/${getUserUrl()}`}>
                                            <span className="register">Dashboard</span>
                                        </Link>
                                    ) : (
                                        <>
                                            <Link to='/registration'>
                                                <span className="register">Register</span>
                                            </Link> | {" "}
                                            <Link to='/login'>
                                                <span className="login">Login</span>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;