import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const SaleReport = lazy(() => import("../../components/reports/SaleReport.jsx"));

const SuperAdminSaleReportPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <SaleReport/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminSaleReportPage;