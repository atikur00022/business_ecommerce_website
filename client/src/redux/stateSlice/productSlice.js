import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: [],
        listTotal: 0,
        brandDropDown:[],
        categoryDropDown:[],
        formValue: {
            name: "",
            unit: "",
            brandId: "",
            categoryId: "",
            details: "",
        },
    },
    reducers: {
        setProductList: (state, action) => {
            state.list = action.payload
        },
        setProductListTotal: (state, action) => {
            state.listTotal = action.payload
        },
        setBrandDropDown: (state, action) => {
            state.brandDropDown = action.payload
        },
        setCategoryDropDown: (state, action) => {
            state.categoryDropDown = action.payload
        },
        onChangeProductInput: (state, action) => {
            state.formValue[`${action.payload.Name}`] = action.payload.Value
        },
        ResetFormValue: (state, action) => {
            Object.keys(state.formValue).forEach((i) => state.formValue[i] = "");
        },
    },
})

export const { setProductList, setProductListTotal, setBrandDropDown, setCategoryDropDown, onChangeProductInput, ResetFormValue } = productSlice.actions

export default productSlice.reducer