import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import TopNavBarLink from "../components/dashboard/TopNavBarLink.jsx";
import AllUsersLink from "../components/dashboard/AllUsersLink.jsx";

const routeAccordionMapping = {
    collapseOne: ["/topnavbar", "/navbar", "/menu"], // Routes under Header
    collapseTwo: ["/adminlists", "/employeelists", "/userlists", "/banneduserlists"], // Routes under All Users
    collapseThree: ["/someOtherRoute", "/anotherRoute"], // Extend as needed
};

const SideBar = () => {
    const location = useLocation();
    const [activeAccordion, setActiveAccordion] = useState("");

    useEffect(() => {
        // Dynamically determine which accordion should be active based on the current route
        const activeSection = Object.entries(routeAccordionMapping).find(([accordionId, routes]) =>
            routes.some((route) => location.pathname.startsWith(route))
        );
        setActiveAccordion(activeSection ? activeSection[0] : ""); // Default to no active accordion if no match
    }, [location.pathname]);

    const handleAccordionClick = (accordionId) => {
        setActiveAccordion((prev) => (prev === accordionId ? "" : accordionId));
    };

    return (
        <section className="sidebar py-3 bg-light">
            <div className="container">
                <div className="accordion" id="accordionExample">
                    {/* Header Accordion */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button ${activeAccordion === "collapseOne" ? "" : "collapsed"}`}
                                type="button"
                                onClick={() => handleAccordionClick("collapseOne")}
                            >
                                Header
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className={`accordion-collapse collapse ${activeAccordion === "collapseOne" ? "show" : ""}`}
                        >
                            <div className="accordion-body">
                                <TopNavBarLink/>
                            </div>
                        </div>
                    </div>

                    {/* All Users Accordion */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button ${activeAccordion === "collapseTwo" ? "" : "collapsed"}`}
                                type="button"
                                onClick={() => handleAccordionClick("collapseTwo")}
                            >
                                All Users
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className={`accordion-collapse collapse ${activeAccordion === "collapseTwo" ? "show" : ""}`}
                        >
                            <div className="accordion-body">
                                <AllUsersLink/>
                            </div>
                        </div>
                    </div>

                    {/* Additional Accordion Items */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button ${activeAccordion === "collapseThree" ? "" : "collapsed"}`}
                                type="button"
                                onClick={() => handleAccordionClick("collapseThree")}
                            >
                                Accordion Item #3
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className={`accordion-collapse collapse ${activeAccordion === "collapseThree" ? "show" : ""}`}
                        >
                            <div className="accordion-body">This is item 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SideBar;
