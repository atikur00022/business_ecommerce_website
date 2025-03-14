import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const ProductList = lazy(() => import("../../components/products/ProductList.jsx"));

const SuperAdminProductListPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ProductList/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminProductListPage;