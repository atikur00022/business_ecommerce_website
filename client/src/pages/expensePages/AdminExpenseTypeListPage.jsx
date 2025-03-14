import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const ExpenseTypeList = lazy(() => import("../../components/ExpenseType/ExpenseTypeList.jsx"));

const AdminExpenseTypeListPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ExpenseTypeList/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminExpenseTypeListPage;