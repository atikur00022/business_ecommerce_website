import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const SaleCreateUpdate = lazy(() => import("../../components/sales/SaleCreateUpdate.jsx"));

const AdminSaleCreateUpdatePage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <SaleCreateUpdate/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminSaleCreateUpdatePage;