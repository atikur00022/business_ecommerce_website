import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const BrandCreateUpdate = lazy(() => import("../../components/brands/BrandCreateUpdate.jsx"));

const SuperAdminBrandCreateUpdatePage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <BrandCreateUpdate/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminBrandCreateUpdatePage;