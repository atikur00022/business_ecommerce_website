import { createSlice } from '@reduxjs/toolkit'

export const saleSlice = createSlice({
    name: 'sale',
    initialState: {
        list: [],
        listTotal: 0,
        customerDropDown: [],
        productDropDown: [],
        saleFormValue: {
            customerId: "",
            vatTax: "",
            discount: "",
            otherCost: "",
            shippingCost: "",
            grandTotal: "",
            note: "",
        },
        saleItemList: [],
    },
    reducers: {
        setSaleList: (state, action) => {
            state.list = action.payload
        },
        setSaleListTotal: (state, action) => {
            state.listTotal = action.payload
        },
        setCustomerDropDown: (state, action) => {
            state.customerDropDown = action.payload
        },
        setProductDropDown: (state, action) => {
            state.productDropDown = action.payload
        },
        onChangeSaleInput: (state, action) => {
            state.saleFormValue[`${action.payload.Name}`] = action.payload.Value
        },
        setSaleItemList: (state, action) => {
            state.saleItemList.push(action.payload)
        },
        setRemoveSaleItemList: (state, action) => {
            state.saleItemList.splice(action.payload, 1)
        }
    },
})

export const { setSaleList, setSaleListTotal, setCustomerDropDown, setProductDropDown, onChangeSaleInput, setSaleItemList, setRemoveSaleItemList } = saleSlice.actions

export default saleSlice.reducer