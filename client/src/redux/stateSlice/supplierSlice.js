import { createSlice } from '@reduxjs/toolkit'

export const supplierSlice = createSlice({
    name: 'supplier',
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
        setSupplierList: (state, action) => {
            state.list = action.payload
        },
        setSupplierListTotal: (state, action) => {
            state.listTotal = action.payload
        },
        onChangeSupplierInput: (state, action) => {
            state.formValue[`${action.payload.Name}`] = action.payload.Value
        },
        ResetFormValue: (state, action) => {
            Object.keys(state.formValue).forEach((i) => state.formValue[i] = "");
        },
    },
})

export const { setSupplierList, setSupplierListTotal, onChangeSupplierInput, ResetFormValue } = supplierSlice.actions

export default supplierSlice.reducer