import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const CategoryList = lazy(() => import("../../components/categories/CategoryList.jsx"));

const AdminCategoryListPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <CategoryList/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminCategoryListPage;