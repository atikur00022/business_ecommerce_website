import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const ReturnCreateUpdate = lazy(() => import("../../components/return/ReturnCreateUpdate.jsx"));

const SuperAdminReturnCreateUpdatePage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ReturnCreateUpdate/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminReturnCreateUpdatePage;