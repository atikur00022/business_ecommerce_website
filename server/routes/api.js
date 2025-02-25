import express from 'express';
const router = express.Router();

import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import * as UsersController from "../app/controllers/users/UsersController.js";
import * as BrandsController from "../app/controllers/brands/BrandsController.js";
import * as CategoriesController from "../app/controllers/categories/CategoriesControlller.js";
import * as CustomersController from "../app/controllers/customers/CustomersController.js";
import * as SuppliersController from "../app/controllers/suppliers/SuppliersController.js";
import * as ExpensesTypeController from "../app/controllers/expenses/ExpensesTypeController.js";
import * as ExpensesController from "../app/controllers/expenses/ExpensesController.js";
import * as ProductsController from "../app/controllers/products/ProductsController.js";
import * as PurchasesController from "../app/controllers/purchase/PurchasesController.js";
import * as SalesController from "../app/controllers/sales/SalesController.js";
import * as ReturnController from "../app/controllers/return/ReturnController.js";
import * as ReportController from "../app/controllers/report/ReportController.js";
import * as SummaryController from "../app/controllers/summary/SummaryController.js";


// Users Route
router.post('/Registration', UsersController.Registration);
router.post('/Login', UsersController.Login);
router.get('/Details', AuthMiddleware, UsersController.Details);
router.post('/EmailVerify/:email', UsersController.EmailVerify);
router.post('/VerifyOtp/:email/:otp', UsersController.VerifyOtp);
router.post('/ResetPassword', UsersController.ResetPassword);
router.post('/ProfileUpdate', AuthMiddleware , UsersController.ProfileUpdate);
router.post('/Logout', AuthMiddleware , UsersController.Logout);

// Brands Route
router.post('/CreateBrand', AuthMiddleware , BrandsController.CreateBrand);
router.post('/UpdateBrand/:id', AuthMiddleware , BrandsController.UpdateBrand);
router.get('/BrandList/:pageNo/:perPage/:searchKeyword', AuthMiddleware , BrandsController.BrandList);
router.get('/BrandDropDown', AuthMiddleware , BrandsController.BrandDropDown);
router.get('/DeleteBrand/:id', AuthMiddleware , BrandsController.DeleteBrand);
router.get('/BrandDetails/:id', AuthMiddleware , BrandsController.BrandDetails);

// Categories Route
router.post('/CreateCategory', AuthMiddleware , CategoriesController.CreateCategory);
router.post('/UpdateCategory/:id', AuthMiddleware , CategoriesController.UpdateCategory);
router.get('/CategoryList/:pageNo/:perPage/:searchKeyword', AuthMiddleware , CategoriesController.CategoryList);
router.get('/CategoryDropDown', AuthMiddleware , CategoriesController.CategoryDropDown);
router.get('/DeleteCategory/:id', AuthMiddleware , CategoriesController.DeleteCategory);
router.get('/CategoryDetails/:id', AuthMiddleware , CategoriesController.CategoryDetails);

// Customers Route
router.post('/CreateCustomer', AuthMiddleware , CustomersController.CreateCustomer);
router.post('/UpdateCustomer/:id', AuthMiddleware , CustomersController.UpdateCustomer);
router.get('/CustomerList/:pageNo/:perPage/:searchKeyword', AuthMiddleware , CustomersController.CustomerList);
router.get('/CustomerDropDown', AuthMiddleware , CustomersController.CustomerDropDown);
router.get('/DeleteCustomer/:id', AuthMiddleware , CustomersController.DeleteCustomer);
router.get('/CustomerDetails/:id', AuthMiddleware , CustomersController.CustomerDetails);

// Suppliers Route
router.post('/CreateSupplier', AuthMiddleware , SuppliersController.CreateSupplier);
router.post('/UpdateSupplier/:id', AuthMiddleware , SuppliersController.UpdateSupplier);
router.get('/SupplierList/:pageNo/:perPage/:searchKeyword', AuthMiddleware , SuppliersController.SupplierList);
router.get('/SupplierDropDown', AuthMiddleware , SuppliersController.SupplierDropDown);
router.get('/DeleteSupplier/:id', AuthMiddleware , SuppliersController.DeleteSupplier);
router.get('/SupplierDetails/:id', AuthMiddleware , SuppliersController.SupplierDetails);

// Expenses Type Route
router.post('/CreateExpenseType', AuthMiddleware , ExpensesTypeController.CreateExpenseType);
router.post('/UpdateExpenseType/:id', AuthMiddleware , ExpensesTypeController.UpdateExpenseType);
router.get('/ExpenseTypeList/:pageNo/:perPage/:searchKeyword', AuthMiddleware , ExpensesTypeController.ExpenseTypeList);
router.get('/ExpenseTypeDropDown', AuthMiddleware , ExpensesTypeController.ExpenseTypeDropDown);
router.get('/ExpenseTypeDetails/:id', AuthMiddleware , ExpensesTypeController.ExpenseTypeDetails);

// Expenses Route
router.post('/CreateExpense', AuthMiddleware , ExpensesController.CreateExpense);
router.post('/UpdateExpense/:id', AuthMiddleware , ExpensesController.UpdateExpense);
router.get('/ExpenseList/:pageNo/:perPage/:searchKeyword', AuthMiddleware , ExpensesController.ExpenseList);
router.get('/ExpenseDropDown', AuthMiddleware , ExpensesController.ExpenseDropDown);
router.get('/DeleteExpense/:id', AuthMiddleware , ExpensesController.DeleteExpense);
router.get('/ExpenseDetails/:id', AuthMiddleware , ExpensesController.ExpenseDetails);

// Products Route
router.post('/CreateProduct', AuthMiddleware , ProductsController.CreateProduct);
router.post('/UpdateProduct/:id', AuthMiddleware , ProductsController.UpdateProduct);
router.get('/ProductList/:pageNo/:perPage/:searchKeyword', AuthMiddleware , ProductsController.ProductList);
router.get('/DeleteProduct/:id', AuthMiddleware , ProductsController.DeleteProduct);
router.get('/ProductDetails/:id', AuthMiddleware , ProductsController.ProductDetails);

// Purchase Route
router.post('/CreatePurchase', AuthMiddleware , PurchasesController.CreatePurchase);
router.get('/PurchaseList/:pageNo/:perPage/:searchKeyword', AuthMiddleware , PurchasesController.PurchaseList);
router.get('/DeletePurchase/:id', AuthMiddleware , PurchasesController.DeletePurchase);

// Sales Route
router.post('/CreateSales', AuthMiddleware , SalesController.CreateSales);
router.get('/SalesList/:pageNo/:perPage/:searchKeyword', AuthMiddleware , SalesController.SalesList);
router.get('/DeleteSale/:id', AuthMiddleware , SalesController.DeleteSale);

// Returns Route
router.post('/CreateReturn', AuthMiddleware , ReturnController.CreateReturn);
router.get('/ReturnList/:pageNo/:perPage/:searchKeyword', AuthMiddleware , ReturnController.ReturnList);
router.get('/DeleteReturn/:id', AuthMiddleware , ReturnController.DeleteReturn);

// Report Route
router.post('/ExpenseReport', AuthMiddleware , ReportController.ExpenseReport);
router.post('/ReturnReport', AuthMiddleware , ReportController.ReturnReport);
router.post('/PurchaseReport', AuthMiddleware , ReportController.PurchaseReport);
router.post('/SaleReport', AuthMiddleware , ReportController.SaleReport);

// Summary Route
router.post('/ExpenseSummary', AuthMiddleware , SummaryController.ExpenseSummary);
router.post('/ReturnSummary', AuthMiddleware , SummaryController.ReturnSummary);
router.post('/PurchaseSummary', AuthMiddleware , SummaryController.PurchaseSummary);
router.post('/SaleSummary', AuthMiddleware , SummaryController.SaleSummary);


// Protected route - this requires authentication and will respond with user details if authenticated.
router.get("/protected", AuthMiddleware, (req, res) => {
    // Access user data from req.headers
    const userData = {
        email: req.headers.email,
        user_id: req.headers.user_id,
        isBanned: req.headers.isBanned,
        role: req.headers.role,
    };
    res.json({ status: "success", message: "Access granted", user: userData });
});

export default router;