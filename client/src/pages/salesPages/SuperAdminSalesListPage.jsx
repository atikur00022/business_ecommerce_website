import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const SaleList = lazy(() => import("../../components/sales/SaleList.jsx"));

const SuperAdminSalesListPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <SaleList/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminSalesListPage;