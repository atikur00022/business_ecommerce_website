import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const ProductCreateUpdate = lazy(() => import("../../components/products/ProductCreateUpdate.jsx"));

const AdminProductCreateUpdatePage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ProductCreateUpdate/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminProductCreateUpdatePage;