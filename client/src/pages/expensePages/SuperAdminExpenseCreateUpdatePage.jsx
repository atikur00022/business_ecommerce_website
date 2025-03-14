import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const ExpenseCreateUpdate = lazy(() => import("../../components/Expense/ExpenseCreateUpdate.jsx"));

const SuperAdminExpenseCreateUpdatePage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ExpenseCreateUpdate/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminExpenseCreateUpdatePage;