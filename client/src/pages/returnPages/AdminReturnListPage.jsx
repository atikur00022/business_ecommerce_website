import React, {lazy, Suspense} from 'react';
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";

const ReturnList = lazy(() => import("../../components/return/ReturnList.jsx"));

const AdminReturnListPage = () => {
    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <ReturnList/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminReturnListPage;