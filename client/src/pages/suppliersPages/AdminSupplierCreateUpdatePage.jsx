import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const AdminSupplierCreateUpdate = lazy(() => import("../../components/suppliers/SupplierCreateUpdate.jsx"));

const AdminSupplierCreateUpdatePage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <AdminSupplierCreateUpdate/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminSupplierCreateUpdatePage;