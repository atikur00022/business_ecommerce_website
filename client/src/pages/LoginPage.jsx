import React from 'react';
import MasterLayout from "../layouts/MasterLayout/MasterLayout.jsx";
import Login from "../components/Login.jsx";

const LoginPage = () => {
    return (
        <MasterLayout>
            <Login/>
        </MasterLayout>
    );
};

export default LoginPage;