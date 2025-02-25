import React, {useEffect, useState} from 'react';
import AdminDashboardHeader from "./AdminDashboardHeader.jsx";
import AdminSidebar from "./AdminSidebar.jsx";

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
            <AdminDashboardHeader />
            <div className="sidebarBox">
                <div className="row">
                    {!isMobile && (
                        <div className="box1 col-lg-2">
                            <AdminSidebar/>
                        </div>
                    )}
                    <div className={`box2 ${isMobile ? 'col-12' : 'col-lg-10'}`}>
                        <div className="container w-100">
                            {props.children}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AdminLayout;