import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";

const CustomerList = lazy(() => import("../../components/customers/CustomerList.jsx"));

const SuperAdminCustomerListPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <CustomerList/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminCustomerListPage;