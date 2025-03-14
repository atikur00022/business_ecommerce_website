import { createSlice } from '@reduxjs/toolkit'

export const reportSlice = createSlice({
    name: 'report',
    initialState: {
        expenseReportByDateList: [],
        saleReportByDateList: [],
        purchaseReportByDateList: [],
        returnReportByDateList: [],
    },
    reducers: {
        setExpenseReportByDateList: (state, action) => {
            state.expenseReportByDateList = action.payload
        },
        setSaleReportByDateList: (state, action) => {
            state.saleReportByDateList = action.payload
        },
        setPurchaseReportByDateList: (state, action) => {
            state.purchaseReportByDateList = action.payload
        },
        setReturnReportByDateList: (state, action) => {
            state.returnReportByDateList = action.payload
        },
    },
})

export const { setExpenseReportByDateList, setSaleReportByDateList, setPurchaseReportByDateList, setReturnReportByDateList } = reportSlice.actions

export default reportSlice.reducer