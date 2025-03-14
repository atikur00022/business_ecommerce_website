import React, {lazy, Suspense, useEffect} from 'react';
import AdminLayout from "../../layouts/AdmitLayout/AdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import {ProfileDetailsRequest} from "../../ApiRequest/Users/UsersApiRequest.js";

const AdminProfile = lazy(() => import("../../components/profiles/AdminProfile.jsx"));

const AdminProfilePage = () => {

    useEffect(() => {
        (async () => {
            await ProfileDetailsRequest();
        })()
    });

    return (
        <AdminLayout>
            <Suspense fallback={<LazLoader />}>
                <AdminProfile/>
            </Suspense>
        </AdminLayout>
    );
};

export default AdminProfilePage;