import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const PurchaseList = lazy(() => import("../../components/purchase/PurchaseList.jsx"));

const SuperAdminPurchaseListPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <PurchaseList/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminPurchaseListPage;