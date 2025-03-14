import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../stateSlice/dashboardSlice.js';
import settingReducer from '../stateSlice/settingSlice.js';
import profileReducer from '../stateSlice/profileSlice.js';
import brandReducer from '../stateSlice/brandSlice.js';
import categoryReducer from '../stateSlice/categorySlice.js';
import customerReducer from '../stateSlice/customerSlice.js';
import expenseReducer from '../stateSlice/expenseSlice.js';
import expenseTypeReducer from '../stateSlice/expenseTypeSlice.js';
import productReducer from '../stateSlice/productSlice.js';
import purchaseReducer from '../stateSlice/PurchaseSlice.js';
import returnReducer from '../stateSlice/returnSlice.js';
import saleReducer from '../stateSlice/SaleSlice.js';
import supplierReducer from '../stateSlice/SupplierSlice.js';
import ReportReducer from '../stateSlice/reportSlice.js';

export default configureStore({
    reducer: {
        dashboard: dashboardReducer,
        setting: settingReducer,
        profile: profileReducer,
        brand: brandReducer,
        category: categoryReducer,
        customer: customerReducer,
        expense: expenseReducer,
        expenseType: expenseTypeReducer,
        product: productReducer,
        purchase: purchaseReducer,
        return: returnReducer,
        sale: saleReducer,
        supplier: supplierReducer,
        report: ReportReducer,
    },
})