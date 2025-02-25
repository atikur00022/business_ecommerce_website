import React, {lazy, Suspense} from 'react';
import MasterLayout from "../layouts/MasterLayout/MasterLayout.jsx";
import LazLoader from "../layouts/loader/LazyLoader.jsx";

const NotFound = lazy(() => import("../components/NotFound.jsx"));

const NotFoundPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazLoader />}>
                <NotFound />
            </Suspense>
        </MasterLayout>
    );
};

export default NotFoundPage;