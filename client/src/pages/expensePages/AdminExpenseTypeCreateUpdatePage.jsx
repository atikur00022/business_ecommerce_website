import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const ExpenseTypeCreateUpdate = lazy(() => import("../../components/ExpenseType/ExpenseTypeCreateUpdate.jsx"));

const AdminExpenseTypeCreateUpdatePage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ExpenseTypeCreateUpdate/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminExpenseTypeCreateUpdatePage;