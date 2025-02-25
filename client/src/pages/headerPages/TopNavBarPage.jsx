import React from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import TopNavBarControl from "../../components/dashboard/TopNavBarControl.jsx";

const TopNavBarPage = () => {
    return (
        <SuperAdminLayout>
            <TopNavBarControl/>
        </SuperAdminLayout>
    );
};

export default TopNavBarPage;