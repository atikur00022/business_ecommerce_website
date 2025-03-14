import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const SupplierList = lazy(() => import("../../components/suppliers/SupplierList.jsx"));

const SuperAdminSupplierListPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <SupplierList/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminSupplierListPage;