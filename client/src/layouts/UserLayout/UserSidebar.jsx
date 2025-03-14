import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {RiDashboardFill} from "react-icons/ri";
import {IoHomeOutline} from "react-icons/io5";
import {BsCircle, BsPeople} from "react-icons/bs";

const UserSidebar = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const sideBarItems = [
        {
            title: "Dashboard",
            icon: <RiDashboardFill size={20} className="sidebar-icon" />,
            url: "/userdashboard",
            subMenu: [] // No submenu
        },
        {
            title: "Go To Home Page",
            icon: <IoHomeOutline size={20} className="sidebar-icon" />,
            url: "/",
            subMenu: [] // No submenu
        },

    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="adminSidebar py-3 shadow">
            <div className="container">
                <div className="accordion border-0" id="sidebarAccordion">
                    {sideBarItems.map((item, index) => (
                        <div className="accordion-item border-0 bg-transparent mb-2" key={index}>
                            <h2 className="accordion-header">
                                {item.subMenu.length > 0 ? (
                                    <button
                                        className={`accordion-button d-flex align-items-center border-0 bg-transparent shadow-none ${activeIndex === index ? "" : "collapsed"}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded={activeIndex === index}
                                        aria-controls={`collapse${index}`}
                                        onClick={() => toggleAccordion(index)}
                                        style={{gap: "10px", padding: "12px 15px"}}
                                    >
                                        {item.icon}
                                        <span className="sidebar-text">{item.title}</span>
                                        {/* If using a custom indicator icon */}
                                        <i className={`accordion-icon ${activeIndex === index ? 'open' : ''}`}
                                           style={{fontSize: '12px'}}></i>
                                    </button>

                                ) : (
                                    <NavLink
                                        to={item.url}
                                        className={({isActive}) =>
                                            `btn text-decoration-none w-100 text-start d-flex align-items-center border-0 bg-transparent no-border sidebar-item ${isActive ? 'adminActive' : 'adminPending'}`
                                        }
                                        style={{gap: "10px", padding: "12px 15px"}}
                                    >
                                        {item.icon}
                                        <span className="sidebar-text">{item.title}</span>
                                    </NavLink>
                                )}
                            </h2>
                            {item.subMenu.length > 0 && (
                                <div
                                    id={`collapse${index}`}
                                    className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
                                    data-bs-parent="#sidebarAccordion"
                                >
                                    <div className="accordion-body border-0 bg-transparent ps-4">
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <NavLink
                                                key={subIndex}
                                                to={subItem.url}
                                                className={({isActive}) =>
                                                    `d-flex align-items-center text-decoration-none py-2 ps-3 sidebar-item ${isActive ? 'adminActive' : 'adminPending'}`
                                                }
                                                style={{gap: "10px", padding: "8px 15px"}}
                                            >
                                                {subItem.icon}
                                                <span className="sidebar-text">{subItem.title}</span>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserSidebar;