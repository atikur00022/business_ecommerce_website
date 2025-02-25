import React, {lazy, Suspense} from 'react';
import MasterLayout from "../layouts/MasterLayout/MasterLayout.jsx";
import LazLoader from "../layouts/loader/LazyLoader.jsx";

const PasswordReset = lazy(() => import("../components/PasswordReset.jsx"));

const PasswordResetPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazLoader />}>
                <PasswordReset/>
            </Suspense>
        </MasterLayout>
    );
};

export default PasswordResetPage;