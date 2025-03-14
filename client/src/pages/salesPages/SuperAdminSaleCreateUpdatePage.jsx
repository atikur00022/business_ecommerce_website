import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const SaleCreateUpdate = lazy(() => import("../../components/sales/SaleCreateUpdate.jsx"));

const SuperAdminSaleCreateUpdatePage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <SaleCreateUpdate/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminSaleCreateUpdatePage;