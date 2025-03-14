import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const ExpenseTypeCreateUpdate = lazy(() => import("../../components/ExpenseType/ExpenseTypeCreateUpdate.jsx"));

const SuperAdminExpenseTypeCreateUpdatePage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ExpenseTypeCreateUpdate/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminExpenseTypeCreateUpdatePage;