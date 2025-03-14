import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const ExpenseList = lazy(() => import("../../components/Expense/ExpenseList.jsx"));

const AdminExpenseListPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ExpenseList/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminExpenseListPage;