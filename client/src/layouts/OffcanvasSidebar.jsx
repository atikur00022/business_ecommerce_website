import React from 'react';
import SideBar from "./SideBar.jsx";

const OffcanvasSidebar = () => {
    return (
        <div className="offcanvas-sidebar mt-2">
            <div className="container">
                <button className="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    <span>Sidebar <i className="bi bi-menu-button-wide"></i></span>
                </button>

                <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop"
                     aria-labelledby="staticBackdropLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="staticBackdropLabel">Sidebar</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div>
                            <SideBar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffcanvasSidebar;