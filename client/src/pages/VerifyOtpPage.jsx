import React, {lazy, Suspense} from 'react';
import MasterLayout from "../layouts/MasterLayout/MasterLayout.jsx";
import LazLoader from "../layouts/loader/LazyLoader.jsx";

const VerifyOtp = lazy(() => import("../components/VerifyOtp.jsx"));

const VerifyOtpPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazLoader />}>
                <VerifyOtp/>
            </Suspense>
        </MasterLayout>
    );
};

export default VerifyOtpPage;