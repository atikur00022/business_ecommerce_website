import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const ReturnReport = lazy(() => import("../../components/reports/ReturnReport.jsx"));

const AdminReturnReportPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ReturnReport/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminReturnReportPage;