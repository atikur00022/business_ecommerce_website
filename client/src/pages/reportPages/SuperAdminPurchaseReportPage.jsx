import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const PurchaseReport = lazy(() => import("../../components/reports/PurchaseReport.jsx"));

const SuperAdminPurchaseReportPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <PurchaseReport/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminPurchaseReportPage;