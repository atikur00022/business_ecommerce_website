import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import {BsBagX, BsCircle, BsGraphUpArrow, BsPeople, BsTruck} from "react-icons/bs";
import {AiOutlineProduct, AiOutlineUnorderedList} from "react-icons/ai";
import {FaTowerObservation} from "react-icons/fa6";
import {LiaEditSolid} from "react-icons/lia";
import {GiBeachBag} from "react-icons/gi";
import {TiShoppingCart} from "react-icons/ti";
import {MdOutlineAccountBalance} from "react-icons/md";

const AdminSidebar = () => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(null);

    const sideBarItems = [
        {
            title: "Dashboard",
            icon: <RiDashboardFill size={20} className="sidebar-icon" />,
            url: "/admindashboard",
            subMenu: []
        },
        {
            title: "Go To Home Page",
            icon: <IoHomeOutline size={20} className="sidebar-icon" />,
            url: "/",
            subMenu: []
        },
        {
            title: "Customers",
            icon: <BsPeople size={20} className="sidebar-icon" />,
            url: "/customer",
            subMenu: [
                {
                    title: "New Customer",
                    icon: <BsCircle size={16} className="sidebar-icon" />,
                    url: "/admincustomercreateupdate",
                },
                {
                    title: "Customer List",
                    icon: <BsCircle size={16} className="sidebar-icon" />,
                    url: "/admincustomerlist",
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
                    url: "/adminsuppliercreateupdate",
                },
                {
                    title: "Supplier List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/adminsupplierlist",
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
                    url: "/adminexpensetypecreateupdate",
                },
                {
                    title: "Expense Type List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/adminexpensetypelist",
                },
                {
                    title: "New Expense",
                    icon: <LiaEditSolid size={16} className="sidebar-icon" />,
                    url: "/adminexpensecreateupdate",
                },
                {
                    title: "Expense List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/adminexpenselist",
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
                    url: "/adminbrandcreateupdate",
                },
                {
                    title: "Brand List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/adminbrandlist",
                },
                {
                    title: "New Category",
                    icon: <LiaEditSolid size={16} className="sidebar-icon" />,
                    url: "/admincategorycreateupdate",
                },
                {
                    title: "Category List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/admincategorylist",
                },
                {
                    title: "New Product",
                    icon: <LiaEditSolid size={16} className="sidebar-icon" />,
                    url: "/adminproductcreateupdate",
                },
                {
                    title: "Product List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/adminproductlist",
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
                    url: "/adminpurchasecreateupdate",
                },
                {
                    title: "Purchase List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/adminpurchaselist",
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
                    url: "/adminsalecreateupdate",
                },
                {
                    title: "Sale List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/adminsalelist",
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
                    url: "/adminreturncreateupdate",
                },
                {
                    title: "Return List",
                    icon: <AiOutlineUnorderedList size={16} className="sidebar-icon" />,
                    url: "/adminreturnlist",
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
                    url: "/adminsalereport",
                },
                {
                    title: "Return Report",
                    icon: <BsBagX size={16} className="sidebar-icon" />,
                    url: "/adminreturnreport",
                },
                {
                    title: "Purchase Report",
                    icon: <GiBeachBag size={16} className="sidebar-icon" />,
                    url: "/adminrpurchasereport",
                },
                {
                    title: "Expense Report",
                    icon: <MdOutlineAccountBalance size={16} className="sidebar-icon" />,
                    url: "/adminrexpensereport",
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
                                        style={{ gap: "10px", padding: "12px 15px" }}
                                    >
                                        {item.icon}
                                        <span className="sidebar-text">{item.title}</span>
                                    </button>
                                ) : (
                                    <NavLink
                                        to={item.url}
                                        className={({ isActive }) =>
                                            `btn text-decoration-none w-100 text-start d-flex align-items-center border-0 bg-transparent no-border sidebar-item ${isActive ? 'adminActive' : 'adminPending'}`
                                        }
                                        style={{ gap: "10px", padding: "12px 15px" }}
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

export default AdminSidebar;
