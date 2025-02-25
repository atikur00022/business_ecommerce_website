import React from 'react';
import SuperAdminLayout from "../../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import SuperAdminDashboard from "../../../components/dashboard/superAdmin/superAdminDashboard/SuperAdminDashboard.jsx";

const DashboardSummaryPage = () => {
    return (
        <SuperAdminLayout>
            <SuperAdminDashboard/>
        </SuperAdminLayout>
    );
};

export default DashboardSummaryPage;