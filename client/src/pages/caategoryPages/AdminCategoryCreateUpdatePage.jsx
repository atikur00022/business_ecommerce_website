import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const CategoryCreateUpdate = lazy(() => import("../../components/categories/CategoryCreateUpdate.jsx"));

const AdminCategoryCreateUpdatePage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <CategoryCreateUpdate/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminCategoryCreateUpdatePage;