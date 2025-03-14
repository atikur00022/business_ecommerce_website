import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        list: [],
        listTotal: 0,
        formValue: {
            name: "",
            email: "",
            phone: "",
            address: "",
        },
    },
    reducers: {
        setCustomerList: (state, action) => {
            state.list = action.payload
        },
        setCustomerListTotal: (state, action) => {
            state.listTotal = action.payload
        },
        onChangeCustomerInput: (state, action) => {
            state.formValue[`${action.payload.Name}`] = action.payload.Value
        },
        ResetFormValue: (state, action) => {
            Object.keys(state.formValue).forEach((i) => state.formValue[i] = "");
        },
    },
})

export const { setCustomerList, setCustomerListTotal, onChangeCustomerInput, ResetFormValue } = customerSlice.actions

export default customerSlice.reducer