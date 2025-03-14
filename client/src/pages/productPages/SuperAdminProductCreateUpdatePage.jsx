import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";

const ProductCreateUpdate = lazy(() => import("../../components/products/ProductCreateUpdate.jsx"));

const SuperAdminProductCreateUpdatePage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ProductCreateUpdate/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminProductCreateUpdatePage;