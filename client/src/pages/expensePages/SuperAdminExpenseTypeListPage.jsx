import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const ExpenseTypeList = lazy(() => import("../../components/ExpenseType/ExpenseTypeList.jsx"));

const SuperAdminExpenseTypeListPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ExpenseTypeList/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminExpenseTypeListPage;