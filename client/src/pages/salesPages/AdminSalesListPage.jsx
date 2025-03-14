import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const SaleList = lazy(() => import("../../components/sales/SaleList.jsx"));

const AdminSalesListPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <SaleList/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminSalesListPage;