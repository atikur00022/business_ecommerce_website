import { createSlice } from '@reduxjs/toolkit'

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        ExpenseTotal: 0,
        ExpenseLast30Days:[],
        SaleTotal: 0,
        SaleLast30Days:[],
        PurchaseTotal: 0,
        PurchaseLast30Days:[],
        ReturnTotal: 0,
        ReturnLast30Days:[],
    },
    reducers: {
        setExpenseTotal: (state, action) => {
            state.ExpenseTotal = action.payload
        },
        setExpenseLast30Days: (state, action) => {
            state.ExpenseLast30Days = action.payload
        },
        setSaleTotal: (state, action) => {
            state.SaleTotal = action.payload
        },
        setSaleLast30Days: (state, action) => {
            state.SaleLast30Days = action.payload
        },
        setPurchaseTotal: (state, action) => {
            state.PurchaseTotal = action.payload
        },
        setPurchaseLast30Days: (state, action) => {
            state.PurchaseLast30Days = action.payload
        },
        setReturnTotal: (state, action) => {
            state.ReturnTotal = action.payload
        },
        setReturnLast30Days: (state, action) => {
            state.ReturnLast30Days = action.payload
        },
    },
})

export const { setExpenseTotal, setExpenseLast30Days, setSaleTotal, setSaleLast30Days, setPurchaseTotal, setPurchaseLast30Days, setReturnTotal, setReturnLast30Days } = dashboardSlice.actions

export default dashboardSlice.reducer