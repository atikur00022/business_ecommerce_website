import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <section className="menu py-2 shadow bg-light">
            <hr className="m-0"/>
            <div className="container">
                <div className="row mt-1">
                    <div className="col-6 col-lg-10 d-flex align-items-center">
                        <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink to='/' className={({isActive}) => isActive ? 'active' : 'pending'}
                                                 aria-current="page">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/grocery'
                                                 className={({isActive}) => isActive ? 'active' : 'pending'}
                                                 aria-current="page">Grocery</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/clothes'
                                                 className={({isActive}) => isActive ? 'active' : 'pending'}
                                                 aria-current="page">Clothes</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-6 col-lg-2">
                        <div className="person-account d-flex align-items-center justify-content-lg-end">
                                <span className='person mx-2'>
                                    <i className="bi bi-headset"></i>
                                </span>
                            <div className="account">
                                <p className="">Hotline</p>
                                <span className="register">0195874752</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Menu;