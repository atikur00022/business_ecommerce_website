import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const SaleReport = lazy(() => import("../../components/reports/SaleReport.jsx"));

const AdminSaleReportPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <SaleReport/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminSaleReportPage;