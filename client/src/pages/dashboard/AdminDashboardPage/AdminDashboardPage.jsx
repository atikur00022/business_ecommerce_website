import React, {lazy, Suspense} from 'react';
import LazLoader from "../../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../../layouts/AdmitLayout/AdminLayout.jsx";

const AdminDashboard = lazy(() => import("../../../components/dashboard/admin/adminDashboard/AdminDashboard.jsx"));

const AdminDashboardPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <AdminDashboard/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminDashboardPage;