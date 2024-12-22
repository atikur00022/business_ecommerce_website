import React, {useEffect, useState} from 'react';
import DashboardHeader from "../DashboardHeader.jsx";
import SideBar from "../SideBar.jsx";
import OffcanvasSidebar from "../OffcanvasSidebar.jsx";

const AdminLayout = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <DashboardHeader />
            <div className="adminSidebar">
                <div className="row">
                    <div className="box1 col-lg-2">
                        {isMobile ? <OffcanvasSidebar /> : <SideBar />}
                    </div>
                    <div className="box2 col-lg-10">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
