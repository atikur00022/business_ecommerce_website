import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const SupplierList = lazy(() => import("../../components/suppliers/SupplierList.jsx"));

const AdminSupplierListPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <SupplierList/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminSupplierListPage;