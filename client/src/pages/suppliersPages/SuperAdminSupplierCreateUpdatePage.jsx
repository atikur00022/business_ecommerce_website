import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const SuperAdminSupplierCreateUpdate = lazy(() => import("../../components/suppliers/SupplierCreateUpdate.jsx"));

const SuperAdminSupplierCreateUpdatePage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <SuperAdminSupplierCreateUpdate/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminSupplierCreateUpdatePage;