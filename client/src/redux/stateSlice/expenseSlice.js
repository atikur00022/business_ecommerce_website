import { createSlice } from '@reduxjs/toolkit'

export const expenseSlice = createSlice({
    name: 'expense',
    initialState: {
        list: [],
        listTotal: 0,
        expenseTypeDropDown: [],
        formValue: {
            typeID: '',
            amount: '',
            note: ''
        },
    },
    reducers: {
        setExpenseList: (state, action) => {
            state.list = action.payload
        },
        setExpenseListTotal: (state, action) => {
            state.listTotal = action.payload
        },
        setExpenseTypeDropDown: (state, action) => {
            state.expenseTypeDropDown = action.payload
        },
        onChangeExpenseInput: (state, action) => {
            state.formValue[`${action.payload.Name}`] = action.payload.Value
        },
        ResetFormValue: (state, action) => {
            Object.keys(state.formValue).forEach((i) => state.formValue[i] = "");
        },
    },
})

export const { setExpenseList, setExpenseListTotal, setExpenseTypeDropDown, onChangeExpenseInput, ResetFormValue } = expenseSlice.actions

export default expenseSlice.reducer