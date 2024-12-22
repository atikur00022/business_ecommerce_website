import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SuperAdminDashboard from "./pages/SuperAdminDashboard.jsx";
import TopNavBarPage from "./pages/HeaderPages/TopNavBarPage.jsx";
import NavBarPage from "./pages/HeaderPages/NavBarPage.jsx";
import MenuPage from "./pages/HeaderPages/MenuPage.jsx";
import AdminListPage from "./pages/UsersPages/AdminListPage.jsx";
import EmployeeListPage from "./pages/UsersPages/EmployeeListPage.jsx";
import UserListPage from "./pages/UsersPages/UserListPage.jsx";
import BannedUserList from "./pages/UsersPages/BannedUserList.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Admin Routes */}
                <Route path="/superadmindashboard" element={<SuperAdminDashboard />} />
                <Route path="/topnavbar" element={<TopNavBarPage />} />
                <Route path="/navbar" element={<NavBarPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/adminlists" element={<AdminListPage />} />
                <Route path="/employeelists" element={<EmployeeListPage />} />
                <Route path="/userlists" element={<UserListPage />} />
                <Route path="/banneduserlists" element={<BannedUserList />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;































