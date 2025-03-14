import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const CustomerList = lazy(() => import("../../components/customers/CustomerList.jsx"));

const AdminCustomerListPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <CustomerList/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminCustomerListPage;