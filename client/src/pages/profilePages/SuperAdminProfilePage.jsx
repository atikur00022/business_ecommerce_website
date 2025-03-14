import React, {lazy, Suspense, useEffect} from 'react';
import SuperAdminLayout from "../../layouts/SuperAdminLayout/SuperAdminLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import {ProfileDetailsRequest} from "../../ApiRequest/Users/UsersApiRequest.js";

const SuperAdminProfile = lazy(() => import("../../components/profiles/SuperAdminProfile.jsx"));

const SuperAdminProfilePage = () => {

    useEffect(() => {
        (async () => {
            await ProfileDetailsRequest();
        })()
    });

    return (
        <SuperAdminLayout>
            <Suspense fallback={<LazLoader />}>
                <SuperAdminProfile/>
            </Suspense>
        </SuperAdminLayout>
    );
};

export default SuperAdminProfilePage;