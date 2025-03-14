import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SuperAdminDashboardPage from "./pages/dashboard/SuperAdminDashboardPage/SuperAdminDashboardPage.jsx";
import NavBarPage from "./pages/headerPages/NavBarPage.jsx";
import MenuPage from "./pages/headerPages/MenuPage.jsx";
import AdminListPage from "./pages/dashboard/UsersPages/AdminListPage.jsx";
import EmployeeListPage from "./pages/dashboard/UsersPages/EmployeeListPage.jsx";
import UserListPage from "./pages/dashboard/UsersPages/UserListPage.jsx";
import BannedUserList from "./pages/dashboard/UsersPages/BannedUserList.jsx";
import UserDashboardPage from "./pages/dashboard/UserDashboardPage/UserDashboardPage.jsx";
import {Bounce, ToastContainer} from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import AdminDashboardPage from "./pages/dashboard/AdminDashboardPage/AdminDashboardPage.jsx";
import VerifyEmailPage from "./pages/VerifyEmailPage.jsx";
import VerifyOtpPage from "./pages/VerifyOtpPage.jsx";
import PasswordResetPage from "./pages/PasswordResetPage.jsx";
import SuperAdminProfilePage from "./pages/profilePages/SuperAdminProfilePage.jsx";
import AdminProfilePage from "./pages/profilePages/AdminProfilePage.jsx";
import UsersProfilePage from "./pages/profilePages/UsersProfilePage.jsx";
import SuperAdminCustomerCreateUpdatePage from "./pages/customersPages/SuperAdminCustomerCreateUpdatePage.jsx";
import SuperAdminCustomerListPage from "./pages/customersPages/SuperAdminCustomerListPage.jsx";
import AdminCustomerCreateUpdatePage from "./pages/customersPages/AdminCustomerCreateUpdatePage.jsx";
import AdminCustomerListPage from "./pages/customersPages/AdminCustomerListPage.jsx";
import SuperAdminSupplierCreateUpdatePage from "./pages/suppliersPages/SuperAdminSupplierCreateUpdatePage.jsx";
import SuperAdminSupplierListPage from "./pages/suppliersPages/SuperAdminSupplierListPage.jsx";
import AdminSupplierCreateUpdatePage from "./pages/suppliersPages/AdminSupplierCreateUpdatePage.jsx";
import AdminSupplierListPage from "./pages/suppliersPages/AdminSupplierListPage.jsx";
import SuperAdminExpenseCreateUpdatePage from "./pages/expensePages/SuperAdminExpenseCreateUpdatePage.jsx";
import SuperAdminExpenseListPage from "./pages/expensePages/SuperAdminExpenseListPage.jsx";
import AdminExpenseCreateUpdatePage from "./pages/expensePages/AdminExpenseCreateUpdatePage.jsx";
import AdminExpenseListPage from "./pages/expensePages/AdminExpenseListPage.jsx";
import SuperAdminExpenseTypeCreateUpdatePage from "./pages/expensePages/SuperAdminExpenseTypeCreateUpdatePage.jsx";
import SuperAdminExpenseTypeListPage from "./pages/expensePages/SuperAdminExpenseTypeListPage.jsx";
import AdminExpenseTypeCreateUpdatePage from "./pages/expensePages/AdminExpenseTypeCreateUpdatePage.jsx";
import AdminExpenseTypeListPage from "./pages/expensePages/AdminExpenseTypeListPage.jsx";
import SuperAdminBrandCreateUpdatePage from "./pages/brandPages/SuperAdminBrandCreateUpdatePage.jsx";
import SuperAdminBrandListPage from "./pages/brandPages/SuperAdminBrandListPage.jsx";
import AdminBrandCreateUpdatePage from "./pages/brandPages/AdminBrandCreateUpdatePage.jsx";
import AdminBrandListPage from "./pages/brandPages/AdminBrandListPage.jsx";
import SuperAdminCategoryCreateUpdatePage from "./pages/caategoryPages/SuperAdminCategoryCreateUpdatePage.jsx";
import SuperAdminCategoryListPage from "./pages/caategoryPages/SuperAdminCategoryListPage.jsx";
import AdminCategoryCreateUpdatePage from "./pages/caategoryPages/AdminCategoryCreateUpdatePage.jsx";
import AdminCategoryListPage from "./pages/caategoryPages/AdminCategoryListPage.jsx";
import SuperAdminProductCreateUpdatePage from "./pages/productPages/SuperAdminProductCreateUpdatePage.jsx";
import SuperAdminProductListPage from "./pages/productPages/SuperAdminProductListPage.jsx";
import AdminProductCreateUpdatePage from "./pages/productPages/AdminProductCreateUpdatePage.jsx";
import AdminProductListPage from "./pages/productPages/AdminProductListPage.jsx";
import SuperAdminPurchaseCreateUpdatePage from "./pages/purchasePages/SuperAdminPurchaseCreateUpdatePage.jsx";
import SuperAdminPurchaseListPage from "./pages/purchasePages/SuperAdminPurchaseListPage.jsx";
import AdminPurchaseCreateUpdatePage from "./pages/purchasePages/AdminPurchaseCreateUpdatePage.jsx";
import AdminPurchaseListPage from "./pages/purchasePages/AdminPurchaseListPage.jsx";
import SuperAdminSaleCreateUpdatepage from "./pages/salesPages/SuperAdminSaleCreateUpdatePage.jsx";
import SuperAdminSalesListPage from "./pages/salesPages/SuperAdminSalesListPage.jsx";
import AdminSaleCreateUpdatePage from "./pages/salesPages/AdminSaleCreateUpdatePage.jsx";
import AdminSalesListPage from "./pages/salesPages/AdminSalesListPage.jsx";
import SuperAdminReturnCreateUpdatePage from "./pages/returnPages/SuperAdminReturnCreateUpdatePage.jsx";
import SuperAdminReturnListPage from "./pages/returnPages/SuperAdminReturnListPage.jsx";
import AdminReturnListPage from "./pages/returnPages/AdminReturnListPage.jsx";
import AdminReturnCreateUpdatePage from "./pages/returnPages/AdminReturnCreateUpdatePage.jsx";
import SuperAdminSaleReportPage from "./pages/reportPages/SuperAdminSaleReportPage.jsx";
import SuperAdminReturnReportPage from "./pages/reportPages/SuperAdminReturnReportPage.jsx";
import SuperAdminPurchaseReportPage from "./pages/reportPages/SuperAdminPurchaseReportPage.jsx";
import SuperAdminExpenseReportPage from "./pages/reportPages/SuperAdminExpenseReportPage.jsx";
import AdminSaleReportPage from "./pages/reportPages/AdminSaleReportPage.jsx";
import AdminReturnReportPage from "./pages/reportPages/AdminReturnReportPage.jsx";
import AdminPurchaseReportPage from "./pages/reportPages/AdminPurchaseReportPage.jsx";
import AdminExpenseReportPage from "./pages/reportPages/AdminExpenseReportPage.jsx";

const App = () => {


    return (
        <>
            <BrowserRouter>
                <ToastContainer position="top-right" theme="dark" transition={Bounce} autoClose={5000} />
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
                    <Route path="/superadminprofile" element={<ProtectedRoute element={<SuperAdminProfilePage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadmincustomercreateupdate" element={<ProtectedRoute element={<SuperAdminCustomerCreateUpdatePage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadmincustomerlist" element={<ProtectedRoute element={<SuperAdminCustomerListPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminsuppliercreateupdate" element={<ProtectedRoute element={<SuperAdminSupplierCreateUpdatePage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminsupplierlist" element={<ProtectedRoute element={<SuperAdminSupplierListPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminexpensecreateupdate" element={<ProtectedRoute element={<SuperAdminExpenseCreateUpdatePage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminexpenselist" element={<ProtectedRoute element={<SuperAdminExpenseListPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminexpensetypecreateupdate" element={<ProtectedRoute element={<SuperAdminExpenseTypeCreateUpdatePage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminexpensetypelist" element={<ProtectedRoute element={<SuperAdminExpenseTypeListPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminbrandcreateupdate" element={<ProtectedRoute element={<SuperAdminBrandCreateUpdatePage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminbrandlist" element={<ProtectedRoute element={<SuperAdminBrandListPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadmincategorycreateupdate" element={<ProtectedRoute element={<SuperAdminCategoryCreateUpdatePage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadmincategorylist" element={<ProtectedRoute element={<SuperAdminCategoryListPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminproductcreateupdate" element={<ProtectedRoute element={<SuperAdminProductCreateUpdatePage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminproductlist" element={<ProtectedRoute element={<SuperAdminProductListPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminpurchasecreateupdate" element={<ProtectedRoute element={<SuperAdminPurchaseCreateUpdatePage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminpurchaselist" element={<ProtectedRoute element={<SuperAdminPurchaseListPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminsalecreateupdate" element={<ProtectedRoute element={<SuperAdminSaleCreateUpdatepage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminsalelist" element={<ProtectedRoute element={<SuperAdminSalesListPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminreturncreateupdate" element={<ProtectedRoute element={<SuperAdminReturnCreateUpdatePage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminreturnlist" element={<ProtectedRoute element={<SuperAdminReturnListPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminsalereport" element={<ProtectedRoute element={<SuperAdminSaleReportPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminreturnreport" element={<ProtectedRoute element={<SuperAdminReturnReportPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminrpurchasereport" element={<ProtectedRoute element={<SuperAdminPurchaseReportPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/superadminrexpensereport" element={<ProtectedRoute element={<SuperAdminExpenseReportPage />} allowedRoles={["superadmin"]} />} />

                    {/* Admin Routes */}
                    <Route path="/admindashboard" element={<ProtectedRoute element={<AdminDashboardPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminprofile" element={<ProtectedRoute element={<AdminProfilePage />} allowedRoles={["admin"]} />} />
                    <Route path="/admincustomercreateupdate" element={<ProtectedRoute element={<AdminCustomerCreateUpdatePage />} allowedRoles={["admin"]} />} />
                    <Route path="/admincustomerlist" element={<ProtectedRoute element={<AdminCustomerListPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminsuppliercreateupdate" element={<ProtectedRoute element={<AdminSupplierCreateUpdatePage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminsupplierlist" element={<ProtectedRoute element={<AdminSupplierListPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminexpensecreateupdate" element={<ProtectedRoute element={<AdminExpenseCreateUpdatePage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminexpenselist" element={<ProtectedRoute element={<AdminExpenseListPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminexpensetypecreateupdate" element={<ProtectedRoute element={<AdminExpenseTypeCreateUpdatePage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminexpensetypelist" element={<ProtectedRoute element={<AdminExpenseTypeListPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminbrandcreateupdate" element={<ProtectedRoute element={<AdminBrandCreateUpdatePage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminbrandlist" element={<ProtectedRoute element={<AdminBrandListPage />} allowedRoles={["admin"]} />} />
                    <Route path="/admincategorycreateupdate" element={<ProtectedRoute element={<AdminCategoryCreateUpdatePage />} allowedRoles={["admin"]} />} />
                    <Route path="/admincategorylist" element={<ProtectedRoute element={<AdminCategoryListPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminproductcreateupdate" element={<ProtectedRoute element={<AdminProductCreateUpdatePage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminproductlist" element={<ProtectedRoute element={<AdminProductListPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminpurchasecreateupdate" element={<ProtectedRoute element={<AdminPurchaseCreateUpdatePage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminpurchaselist" element={<ProtectedRoute element={<AdminPurchaseListPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminsalecreateupdate" element={<ProtectedRoute element={<AdminSaleCreateUpdatePage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminsalelist" element={<ProtectedRoute element={<AdminSalesListPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminreturncreateupdate" element={<ProtectedRoute element={<AdminReturnCreateUpdatePage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminreturnlist" element={<ProtectedRoute element={<AdminReturnListPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminsalereport" element={<ProtectedRoute element={<AdminSaleReportPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminreturnreport" element={<ProtectedRoute element={<AdminReturnReportPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminrpurchasereport" element={<ProtectedRoute element={<AdminPurchaseReportPage />} allowedRoles={["admin"]} />} />
                    <Route path="/adminrexpensereport" element={<ProtectedRoute element={<AdminExpenseReportPage />} allowedRoles={["admin"]} />} />




                    <Route path="/navbar" element={<ProtectedRoute element={<NavBarPage />} allowedRoles={["superadmin", "superAdmin"]} />} />
                    <Route path="/menu" element={<ProtectedRoute element={<MenuPage />} allowedRoles={["superadmin", "superAdmin"]} />} />
                    <Route path="/adminlists" element={<ProtectedRoute element={<AdminListPage />} allowedRoles={["superadmin"]} />} />
                    <Route path="/employeelists" element={<ProtectedRoute element={<EmployeeListPage />} allowedRoles={["superAdmin"]} />} />
                    <Route path="/userlists" element={<ProtectedRoute element={<UserListPage />} allowedRoles={["superAdmin"]} />} />
                    <Route path="/banneduserlists" element={<ProtectedRoute element={<BannedUserList />} allowedRoles={["superadmin"]} />} />



                    {/* User Routes */}
                    <Route path="/userdashboard" element={<ProtectedRoute element={<UserDashboardPage />} allowedRoles={["user"]} />} />
                    <Route path="/userprofile" element={<ProtectedRoute element={<UsersProfilePage />} allowedRoles={["user"]} />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>


        </>
    );
};

export default App;































