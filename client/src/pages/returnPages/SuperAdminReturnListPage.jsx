import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const ReturnList = lazy(() => import("../../components/return/ReturnList.jsx"));

const SuperAdminReturnListPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ReturnList/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminReturnListPage;