import { createSlice } from '@reduxjs/toolkit'

export const brandSlice = createSlice({
    name: 'brand',
    initialState: {
        list: [],
        listTotal: 0,
        formValue: {
            name: "",
        },
    },
    reducers: {
        setBrandList: (state, action) => {
            state.list = action.payload
        },
        setBrandListTotal: (state, action) => {
            state.listTotal = action.payload
        },
        onChangeBrandInput: (state, action) => {
            state.formValue[`${action.payload.Name}`] = action.payload.Value
        },
        ResetFormValue: (state, action) => {
            Object.keys(state.formValue).forEach((i) => state.formValue[i] = "");
        },
    },
})

export const { setBrandList, setBrandListTotal, onChangeBrandInput, ResetFormValue } = brandSlice.actions

export default brandSlice.reducer