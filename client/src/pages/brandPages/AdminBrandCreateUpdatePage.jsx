import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const BrandCreateUpdate = lazy(() => import("../../components/brands/BrandCreateUpdate.jsx"));

const AdminBrandCreateUpdatePage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <BrandCreateUpdate/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminBrandCreateUpdatePage;