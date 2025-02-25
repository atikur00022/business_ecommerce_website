import React, {lazy, Suspense} from 'react';
import MasterLayout from "../layouts/MasterLayout/MasterLayout.jsx";
import LazLoader from "../layouts/loader/LazyLoader.jsx";

const Registration = lazy(() => import("../components/Registration.jsx"));

const RegistrationPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazLoader />}>
                <Registration/>
            </Suspense>
        </MasterLayout>
    );
};

export default RegistrationPage;