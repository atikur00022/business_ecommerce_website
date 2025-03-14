import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const AdminCustomerCreateUpdate = lazy(() => import("../../components/customers/CustomerCreateUpdate.jsx"));

const AdminCustomerCreateUpdatePage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <AdminCustomerCreateUpdate/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminCustomerCreateUpdatePage;