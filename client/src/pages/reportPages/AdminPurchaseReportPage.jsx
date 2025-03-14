import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const PurchaseReport = lazy(() => import("../../components/reports/PurchaseReport.jsx"));

const AdminPurchaseReportPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <PurchaseReport/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminPurchaseReportPage;