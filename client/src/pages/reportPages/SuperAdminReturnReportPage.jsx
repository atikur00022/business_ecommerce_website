import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const ReturnReport = lazy(() => import("../../components/reports/ReturnReport.jsx"));

const SuperAdminReturnReportPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ReturnReport/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminReturnReportPage;