import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const ExpenseList = lazy(() => import("../../components/Expense/ExpenseList.jsx"));

const SuperAdminExpenseListPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ExpenseList/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminExpenseListPage;