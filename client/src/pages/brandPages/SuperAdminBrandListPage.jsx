import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const BrandList = lazy(() => import("../../components/brands/BrandList.jsx"));

const SuperAdminBrandListPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <BrandList/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminBrandListPage;