import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const ExpenseReport = lazy(() => import("../../components/reports/ExpenseReport.jsx"));

const AdminExpenseReportPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ExpenseReport/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminExpenseReportPage;