import React from 'react';
import {Link} from "react-router-dom";

const TopNavbar = () => {
    return (
        <section className="topnavbar bg-success py-2">
            <div className="container">
                <div className="row">
                    <div className="d-flex col-lg-6 justify-content-center justify-content-lg-start align-items-center text-white">
                        <span>
                            <span className="email">
                                <i className="bi bi-envelope"></i> Support@PlanB.com
                            </span>
                            <span className="contact mx-2">
                                <i className="bi bi-telephone-outbound"></i> 01774688159
                            </span>
                        </span>
                    </div>
                    <div className="d-flex col-lg-6 justify-content-center justify-content-lg-end align-items-center text-white">
                        <Link to="/">
                            <span className="mx-2">
                                <i className="bi bi-whatsapp"></i>
                            </span>
                        </Link>
                        <Link to="/">
                            <span className="mx-2">
                                <i className="bi bi-youtube"></i>
                            </span>
                        </Link>
                        <Link to="/">
                            <span className="mx-2">
                                <i className="bi bi-facebook"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopNavbar;