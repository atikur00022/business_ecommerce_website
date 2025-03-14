import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const PurchaseCreateUpdate = lazy(() => import("../../components/purchase/PurchaseCreateUpdate.jsx"));

const AdminPurchaseCreateUpdatePage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <PurchaseCreateUpdate/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminPurchaseCreateUpdatePage;