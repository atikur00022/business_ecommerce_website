import React from 'react';
import {NavLink} from "react-router-dom";

const UserSidebar = () => {
    return (
        <section className="userSidebar py-3 bg-light vh-100">
            <div className="container">
                {/* Dashboard Summary */}
                <div className="mb-1">
                    <NavLink to="/userdashboard"
                             className={({isActive}) => `list-group-item ${isActive ? 'userActive' : 'userPending'}`}>
                        <span>Dashboard Summary </span>
                    </NavLink>
                </div>

                {/*<div className="accordion" id="accordionExample">*/}
                {/*    /!* Header Accordion *!/*/}
                {/*    <div className="accordion-item">*/}
                {/*        <h2 className="accordion-header">*/}
                {/*            <button*/}
                {/*                className={`accordion-button ${activeAccordion === "collapseOne" ? "" : "collapsed"}`}*/}
                {/*                type="button"*/}
                {/*                onClick={() => handleAccordionClick("collapseOne")}*/}
                {/*            >*/}
                {/*                Header*/}
                {/*            </button>*/}
                {/*        </h2>*/}
                {/*        <div*/}
                {/*            id="collapseOne"*/}
                {/*            className={`accordion-collapse collapse ${activeAccordion === "collapseOne" ? "show" : ""}`}*/}
                {/*        >*/}
                {/*            <div className="accordion-body">*/}
                {/*                <TopNavBarLink/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    /!* All Users Accordion *!/*/}
                {/*    <div className="accordion-item">*/}
                {/*        <h2 className="accordion-header">*/}
                {/*            <button*/}
                {/*                className={`accordion-button ${activeAccordion === "collapseTwo" ? "" : "collapsed"}`}*/}
                {/*                type="button"*/}
                {/*                onClick={() => handleAccordionClick("collapseTwo")}*/}
                {/*            >*/}
                {/*                All Users*/}
                {/*            </button>*/}
                {/*        </h2>*/}
                {/*        <div*/}
                {/*            id="collapseTwo"*/}
                {/*            className={`accordion-collapse collapse ${activeAccordion === "collapseTwo" ? "show" : ""}`}*/}
                {/*        >*/}
                {/*            <div className="accordion-body">*/}
                {/*                <AllUsersLink/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    /!* Additional Accordion Items *!/*/}
                {/*    <div className="accordion-item">*/}
                {/*        <h2 className="accordion-header">*/}
                {/*            <button*/}
                {/*                className={`accordion-button ${activeAccordion === "collapseThree" ? "" : "collapsed"}`}*/}
                {/*                type="button"*/}
                {/*                onClick={() => handleAccordionClick("collapseThree")}*/}
                {/*            >*/}
                {/*                Accordion Item #3*/}
                {/*            </button>*/}
                {/*        </h2>*/}
                {/*        <div*/}
                {/*            id="collapseThree"*/}
                {/*            className={`accordion-collapse collapse ${activeAccordion === "collapseThree" ? "show" : ""}`}*/}
                {/*        >*/}
                {/*            <div className="accordion-body">This is item 3</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default UserSidebar;