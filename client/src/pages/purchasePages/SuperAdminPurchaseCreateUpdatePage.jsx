import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const PurchaseCreateUpdate = lazy(() => import("../../components/purchase/PurchaseCreateUpdate.jsx"));

const SuperAdminPurchaseCreateUpdatePage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <PurchaseCreateUpdate/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminPurchaseCreateUpdatePage;