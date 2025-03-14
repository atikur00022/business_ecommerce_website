import React, {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import {BsBagX, BsCircle, BsGraphUpArrow, BsPeople, BsTruck} from "react-icons/bs";
import {IoHomeOutline} from "react-icons/io5";
import {LiaEditSolid} from "react-icons/lia";
import {AiOutlineProduct, AiOutlineUnorderedList} from "react-icons/ai";
import {GiBeachBag} from "react-icons/gi";
import {TiShoppingCart} from "react-icons/ti";
import {MdOutlineAccountBalance} from "react-icons/md";

const SuperAdminSideBar = () => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(null);

    const sideBarItems = [
        {
            title: "Dashboard",
            icon: <RiDashboardFill size={20} className="sidebar-icon" />,
            url: "/superadmindashboard",
            subMenu: [] // No submenu
        },
        {
            title: "Go To Home Page",
            icon: <IoHomeOutline size={20} className="sidebar-icon" />,
            url: "/",
            subMenu: [] // No submenu
        },
        {
            title: "Customers",
            icon: <BsPeople size={20} className="sidebar-icon" />,
            url: "/customer",
            subMenu: [
                {
                    title: "New Customer",
                    icon: <BsCircle size={16} className="sidebar-icon" />,
                    url: "/superadmincustomercreateupdate",
                },
                {
                    title: "Customer List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/superadmincustomerlist",
                }
            ]
        },
        {
            title: "Suppliers",
            icon: <BsTruck size={20} className="sidebar-icon" />,
            url: "/supplier",
            subMenu: [
                {
                    title: "New Supplier",
                    icon: <BsCircle size={16} className="sidebar-icon" />,
                    url: "/superadminsuppliercreateupdate",
                },
                {
                    title: "Supplier List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/superadminsupplierlist",
                }
            ]
        },
        {
            title: "Expense",
            icon: <MdOutlineAccountBalance size={20} className="sidebar-icon" />,
            url: "/expense",
            subMenu: [
                {
                    title: "New Expense Type",
                    icon: <BsCircle size={16} className="sidebar-icon" />,
                    url: "/superadminexpensetypecreateupdate",
                },
                {
                    title: "Expense Type List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/superadminexpensetypelist",
                },
                {
                    title: "New Expense",
                    icon: <LiaEditSolid size={16} className="sidebar-icon" />,
                    url: "/superadminexpensecreateupdate",
                },
                {
                    title: "Expense List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/superadminexpenselist",
                }
            ]
        },
        {
            title: "Product",
            icon: <AiOutlineProduct size={20} className="sidebar-icon" />,
            url: "/product",
            subMenu: [
                {
                    title: "New Brand",
                    icon: <BsCircle size={16} className="sidebar-icon" />,
                    url: "/superadminbrandcreateupdate",
                },
                {
                    title: "Brand List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/superadminbrandlist",
                },
                {
                    title: "New Category",
                    icon: <LiaEditSolid size={16} className="sidebar-icon" />,
                    url: "/superadmincategorycreateupdate",
                },
                {
                    title: "Category List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/superadmincategorylist",
                },
                {
                    title: "New Product",
                    icon: <LiaEditSolid size={16} className="sidebar-icon" />,
                    url: "/superadminproductcreateupdate",
                },
                {
                    title: "Product List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/superadminproductlist",
                }
            ]
        },
        {
            title: "Purchase",
            icon: <GiBeachBag size={20} className="sidebar-icon" />,
            url: "/purchase",
            subMenu: [
                {
                    title: "New Purchase",
                    icon: <BsCircle size={16} className="sidebar-icon" />,
                    url: "/superadminpurchasecreateupdate",
                },
                {
                    title: "Purchase List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/superadminpurchaselist",
                }
            ]
        },
        {
            title: "Sale",
            icon: <TiShoppingCart size={20} className="sidebar-icon" />,
            url: "/sale",
            subMenu: [
                {
                    title: "New Sale",
                    icon: <BsCircle size={16} className="sidebar-icon" />,
                    url: "/superadminsalecreateupdate",
                },
                {
                    title: "Sale List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/superadminsalelist",
                }
            ]
        },
        {
            title: "Return",
            icon: <BsBagX size={20} className="sidebar-icon" />,
            url: "/return",
            subMenu: [
                {
                    title: "New Return",
                    icon: <BsCircle size={16} className="sidebar-icon" />,
                    url: "/superadminreturncreateupdate",
                },
                {
                    title: "Return List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/superadminreturnlist",
                }
            ]
        },
        {
            title: "Report",
            icon: <BsGraphUpArrow size={20} className="sidebar-icon" />,
            url: "/report",
            subMenu: [
                {
                    title: "Sale Report",
                    icon: <TiShoppingCart size={16} className="sidebar-icon" />,
                    url: "/superadminsalereport",
                },
                {
                    title: "Return Report",
                    icon: <BsBagX size={16} className="sidebar-icon" />,
                    url: "/superadminreturnreport",
                },
                {
                    title: "Purchase Report",
                    icon: <GiBeachBag size={16} className="sidebar-icon" />,
                    url: "/superadminrpurchasereport",
                },
                {
                    title: "Expense Report",
                    icon: <MdOutlineAccountBalance size={16} className="sidebar-icon" />,
                    url: "/superadminrexpensereport",
                }
            ]
        },
    ];

    // Function to check if the current route is in a submenu
    useEffect(() => {
        sideBarItems.forEach((item, index) => {
            if (item.subMenu.some(sub => sub.url === location.pathname)) {
                setActiveIndex(index);
            }
        });
    }, [location.pathname]);

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
                                                className={({ isActive }) =>
                                                    `d-flex align-items-center text-decoration-none py-2 ps-3 sidebar-item ${isActive ? 'adminActive' : 'adminPending'}`
                                                }
                                                style={{ gap: "10px", padding: "8px 15px" }}
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

export default SuperAdminSideBar;
