import React, {lazy, Suspense} from 'react';
import MasterLayout from "../layouts/MasterLayout/MasterLayout.jsx";
import LazLoader from "../layouts/loader/LazyLoader.jsx";

const Login = lazy(() => import("../components/Login.jsx"));

const LoginPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazLoader />}>
                <Login/>
            </Suspense>
        </MasterLayout>
    );
};

export default LoginPage;