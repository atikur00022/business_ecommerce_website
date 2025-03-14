import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const CategoryList = lazy(() => import("../../components/categories/CategoryList.jsx"));

const SuperAdminCategoryListPage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <CategoryList/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminCategoryListPage;