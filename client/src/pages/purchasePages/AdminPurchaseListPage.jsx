import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const PurchaseList = lazy(() => import("../../components/purchase/PurchaseList.jsx"));

const AdminPurchaseListPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <PurchaseList/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminPurchaseListPage;