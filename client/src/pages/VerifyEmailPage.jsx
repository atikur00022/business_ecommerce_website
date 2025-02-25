import React, {lazy, Suspense} from 'react';
import MasterLayout from "../layouts/MasterLayout/MasterLayout.jsx";
import LazLoader from "../layouts/loader/LazyLoader.jsx";

const VerifyEmail = lazy(() => import("../components/VerifyEmail.jsx"));

const VerifyEmailPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazLoader />}>
                <VerifyEmail/>
            </Suspense>
        </MasterLayout>
    );
};

export default VerifyEmailPage;