import { createSlice } from '@reduxjs/toolkit'

export const returnSlice = createSlice({
    name: 'return',
    initialState: {
        list: [],
        listTotal: 0,
        customerDropDown: [],
        productDropDown: [],
        returnFormValue: {
            customerId: "",
            vatTax: "",
            discount: "",
            otherCost: "",
            shippingCost: "",
            grandTotal: "",
            note: "",
        },
        returnItemList: [],
    },
    reducers: {
        setReturnList: (state, action) => {
            state.list = action.payload
        },
        setReturnListTotal: (state, action) => {
            state.listTotal = action.payload
        },
        setReturnCustomerDropDown: (state, action) => {
            state.customerDropDown = action.payload
        },
        setReturnProductDropDown: (state, action) => {
            state.productDropDown = action.payload
        },
        onChangeReturnInput: (state, action) => {
            state.returnFormValue[`${action.payload.Name}`] = action.payload.Value
        },
        setReturnItemList: (state, action) => {
            state.returnItemList.push(action.payload)
        },
        setRemoveReturnItemList: (state, action) => {
            state.returnItemList.splice(action.payload, 1)
        }
    },
})

export const { setReturnList, setReturnListTotal, setReturnCustomerDropDown, setReturnProductDropDown, onChangeReturnInput, setReturnItemList, setRemoveReturnItemList } = returnSlice.actions

export default returnSlice.reducer