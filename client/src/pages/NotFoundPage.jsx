import React, {lazy, Suspense} from 'react';
import LazLoader from "../layouts/loader/LazyLoader.jsx";

const NotFound = lazy(() => import("../components/NotFound.jsx"));

const NotFoundPage = () => {
    return (
        <Suspense fallback={<LazLoader />}>
            <NotFound />
        </Suspense>
    );
};

export default NotFoundPage;