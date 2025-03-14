import React, {lazy, Suspense, useEffect} from 'react';
import UserLayout from "../../layouts/UserLayout/UserLayout.jsx";
import LazLoader from "../../layouts/loader/LazyLoader.jsx";
import {ProfileDetailsRequest} from "../../ApiRequest/Users/UsersApiRequest.js";

const UsersProfile = lazy(() => import("../../components/profiles/UsersProfile.jsx"));

const UsersProfilePage = () => {

    useEffect(() => {
        (async () => {
            await ProfileDetailsRequest();
        })()
    });

    return (
        <UserLayout>
            <Suspense fallback={<LazLoader />}>
                <UsersProfile/>
            </Suspense>
        </UserLayout>
    );
};

export default UsersProfilePage;