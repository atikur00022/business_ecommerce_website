import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SuperAdminDashboardPage from "./pages/dashboard/SuperAdminDashboardPage/SuperAdminDashboardPage.jsx";
import TopNavBarPage from "./pages/headerPages/TopNavBarPage.jsx";
import NavBarPage from "./pages/headerPages/NavBarPage.jsx";
import MenuPage from "./pages/headerPages/MenuPage.jsx";
import AdminListPage from "./pages/dashboard/UsersPages/AdminListPage.jsx";
import EmployeeListPage from "./pages/dashboard/UsersPages/EmployeeListPage.jsx";
import UserListPage from "./pages/dashboard/UsersPages/UserListPage.jsx";
import BannedUserList from "./pages/dashboard/UsersPages/BannedUserList.jsx";
import SuperAdminDashboard from "./components/dashboard/superAdmin/superAdminDashboard/SuperAdminDashboard.jsx";
import UserDashboardPage from "./pages/dashboard/UserDashboardPage/UserDashboardPage.jsx";
import {Bounce, ToastContainer} from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import AdminDashboardPage from "./pages/dashboard/AdminDashboardPage/AdminDashboardPage.jsx";
import VerifyEmailPage from "./pages/VerifyEmailPage.jsx";
import VerifyOtpPage from "./pages/VerifyOtpPage.jsx";
import PasswordResetPage from "./pages/PasswordResetPage.jsx";

const App = () => {


    return (
        <>
            <BrowserRouter>
                <ToastContainer position="bottom-center" theme="dark" transition={Bounce} autoClose={5000} />
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    {/* Prevent logged-in users from accessing login/registration */}
                    <Route path="/registration" element={<ProtectedRoute element={<RegistrationPage />} redirectIfAuth={true} />} />
                    <Route path="/login" element={<ProtectedRoute element={<LoginPage />} redirectIfAuth={true} />} />
                    <Route path="/verifyemail" element={<ProtectedRoute element={<VerifyEmailPage />} redirectIfAuth={true} />} />
                    <Route path="/verifyotp" element={<ProtectedRoute element={<VerifyOtpPage />} redirectIfAuth={true} />} />
                    <Route path="/passwordreset" element={<ProtectedRoute element={<PasswordResetPage />} redirectIfAuth={true} />} />

                    {/* All Admin Routes */}

                    {/* Super Admin Routes */}
                    <Route path="/superadmindashboard" element={<ProtectedRoute element={<SuperAdminDashboardPage />} allowedRoles={["superadmin"]} />} />

                    {/* Admin Routes */}
                    <Route path="/admindashboard" element={<ProtectedRoute element={<AdminDashboardPage />} allowedRoles={["admin"]} />} />



                    <Route path="/dashboardsummary" element={<ProtectedRoute element={<SuperAdminDashboard />} allowedRoles={["superadmin", "superAdmin"]} />} />
                    <Route path="/topnavbar" element={<ProtectedRoute element={<TopNavBarPage />} allowedRoles={["superadmin", "superAdmin"]} />} />
                    <Route path="/navbar" element={<ProtectedRoute element={<NavBarPage />} allowedRoles={["superadmin", "superAdmin"]} />} />
                    <Route path="/menu" element={<ProtectedRoute element={<MenuPage />} allowedRoles={["superadmin", "superAdmin"]} />} />
                    <Route path="/adminlists" element={<ProtectedRoute element={<AdminListPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/employeelists" element={<ProtectedRoute element={<EmployeeListPage />} allowedRoles={["superAdmin"]} />} />
                    <Route path="/userlists" element={<ProtectedRoute element={<UserListPage />} allowedRoles={["superAdmin"]} />} />
                    <Route path="/banneduserlists" element={<ProtectedRoute element={<BannedUserList />} allowedRoles={["superadmin"]} />} />



                    {/* User Routes */}
                    <Route path="/userdashboard" element={<ProtectedRoute element={<UserDashboardPage />} allowedRoles={["user"]} />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>


        </>
    );
};

export default App;































