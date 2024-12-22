import React from 'react';
import TopNavbar from "../TopNavbar.jsx";
import Navbar from "../Navbar.jsx";
import Menu from "../Menu.jsx";
import Footer from "../Footer.jsx";

const MasterLayout = (props) => {
    return (
        <>
            <TopNavbar/>
            <Navbar/>
            <Menu/>
            {props.children}
            <Footer/>
        </>
    );
};

export default MasterLayout;