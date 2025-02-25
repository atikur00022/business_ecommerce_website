import React, {lazy, Suspense} from 'react';
import MasterLayout from "../layouts/MasterLayout/MasterLayout.jsx";
import LazLoader from "../layouts/loader/LazyLoader.jsx";

const Home = lazy(() => import("../components/home/Home.jsx"));

const HomePage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazLoader />}>
                <Home/>
            </Suspense>
        </MasterLayout>
    );
};

export default HomePage;