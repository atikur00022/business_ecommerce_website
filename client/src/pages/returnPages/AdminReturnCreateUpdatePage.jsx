import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const ReturnCreateUpdate = lazy(() => import("../../components/return/ReturnCreateUpdate.jsx"));

const AdminReturnCreateUpdatePage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ReturnCreateUpdate/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminReturnCreateUpdatePage;