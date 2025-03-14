import { createSlice } from '@reduxjs/toolkit'

export const expenseTypeSlice = createSlice({
    name: 'expenseType',
    initialState: {
        list: [],
        listTotal: 0,
        formValue: {
            name: "",
        },
    },
    reducers: {
        setExpenseTypeList: (state, action) => {
            state.list = action.payload
        },
        setExpenseTypeListTotal: (state, action) => {
            state.listTotal = action.payload
        },
        onChangeExpenseTypeInput: (state, action) => {
            state.formValue[`${action.payload.Name}`] = action.payload.Value
        },
        ResetFormValue: (state, action) => {
            Object.keys(state.formValue).forEach((i) => state.formValue[i] = "");
        },
    },
})

export const { setExpenseTypeList, setExpenseTypeListTotal, onChangeExpenseTypeInput, ResetFormValue } = expenseTypeSlice.actions

export default expenseTypeSlice.reducer