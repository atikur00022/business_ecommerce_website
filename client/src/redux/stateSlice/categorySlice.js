import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        list: [],
        listTotal: 0,
        formValue: {
            name: "",
        },
    },
    reducers: {
        setCategoryList: (state, action) => {
            state.list = action.payload
        },
        setCategoryListTotal: (state, action) => {
            state.listTotal = action.payload
        },
        onChangeCategoryInput: (state, action) => {
            state.formValue[`${action.payload.Name}`] = action.payload.Value
        },
        ResetFormValue: (state, action) => {
            Object.keys(state.formValue).forEach((i) => state.formValue[i] = "");
        },
    },
})

export const { setCategoryList, setCategoryListTotal, onChangeCategoryInput, ResetFormValue } = categorySlice.actions

export default categorySlice.reducer