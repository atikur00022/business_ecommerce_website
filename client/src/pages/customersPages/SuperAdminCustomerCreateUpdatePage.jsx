import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";

const SuperAdminCustomerCreateUpdate = lazy(() => import("../../components/customers/CustomerCreateUpdate.jsx"));

const SuperAdminCustomerCreateUpdatePage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <SuperAdminCustomerCreateUpdate/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminCustomerCreateUpdatePage;