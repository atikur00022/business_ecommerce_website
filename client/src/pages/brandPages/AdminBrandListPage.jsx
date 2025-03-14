import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const BrandList = lazy(() => import("../../components/brands/BrandList.jsx"));

const AdminBrandListPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <BrandList/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminBrandListPage;