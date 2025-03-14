import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const ExpenseReport = lazy(() => import("../../components/reports/ExpenseReport.jsx"));

const SuperAdminExpenseReportPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ExpenseReport/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminExpenseReportPage;