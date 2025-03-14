import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const ExpenseCreateUpdate = lazy(() => import("../../components/Expense/ExpenseCreateUpdate.jsx"));

const AdminExpenseCreateUpdatePage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ExpenseCreateUpdate/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminExpenseCreateUpdatePage;