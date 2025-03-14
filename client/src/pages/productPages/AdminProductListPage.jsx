import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const ProductList = lazy(() => import("../../components/products/ProductList.jsx"));

const AdminProductListPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ProductList/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminProductListPage;