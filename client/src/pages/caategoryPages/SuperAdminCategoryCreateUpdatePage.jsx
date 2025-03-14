import React, {lazy, Suspense} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";

const CategoryCreateUpdate = lazy(() => import("../../components/categories/CategoryCreateUpdate.jsx"));

const SuperAdminCategoryCreateUpdatePage = () => {
    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <CategoryCreateUpdate/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminCategoryCreateUpdatePage;