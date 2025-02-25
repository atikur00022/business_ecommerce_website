import React from 'react';
import SuperAdminSideBar from "./SuperAdminLayout/SuperAdminSideBar.jsx";
import {HiMiniBars3BottomRight} from "react-icons/hi2";

const OffcanvasSidebar = () => {
    return (
        <div className="offcanvas-sidebar">
            {/*<button className="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas"*/}
            {/*        data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">*/}
            {/*</button>*/}
            <span data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"><HiMiniBars3BottomRight /></span>

            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop"
                 aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Sidebar</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <SuperAdminSideBar />
                </div>
            </div>
        </div>
    );
};

export default OffcanvasSidebar;
