import React from 'react';
import UserLayout from "../../../layouts/UserLayout/UserLayout.jsx";
import UserDashboard from "../../../components/dashboard/users/userDashboard/UserDashboard.jsx";

const UserDashboardPage = () => {
    return (
        <UserLayout>
            <UserDashboard/>
        </UserLayout>
    );
};

export default UserDashboardPage;