import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../../layouts/loader/LazyLoader.jsx";

const SuperAdminDashboard = lazy(() => import("../../../components/dashboard/superAdmin/superAdminDashboard/SuperAdminDashboard.jsx"));

const SuperAdminDashboardPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <SuperAdminDashboard/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminDashboardPage;