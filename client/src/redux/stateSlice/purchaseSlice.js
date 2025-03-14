import { createSlice } from '@reduxjs/toolkit'

export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        list: [],
        listTotal: 0,
        supplierDropDown: [],
        productDropDown: [],
        purchaseFormValue: {
            supplierId: "",
            vatTax: "",
            discount: "",
            otherCost: "",
            shippingCost: "",
            grandTotal: "",
            note: "",
        },
        purchaseItemList: [],
    },
    reducers: {
        setPurchaseList: (state, action) => {
            state.list = action.payload
        },
        setPurchaseListTotal: (state, action) => {
            state.listTotal = action.payload
        },
        setPurchaseSupplierDropDown: (state, action) => {
            state.supplierDropDown = action.payload
        },
        setPurchaseProductDropDown: (state, action) => {
            state.productDropDown = action.payload
        },
        onChangePurchaseInput: (state, action) => {
            state.purchaseFormValue[`${action.payload.Name}`] = action.payload.Value
        },
        setPurchaseItemList: (state, action) => {
            state.purchaseItemList.push(action.payload)
        },
        setRemovePurchaseItemList: (state, action) => {
            state.purchaseItemList.splice(action.payload, 1)
        }
    },
})

export const { setPurchaseList, setPurchaseListTotal, setPurchaseSupplierDropDown, setPurchaseProductDropDown, onChangePurchaseInput, setPurchaseItemList, setRemovePurchaseItemList } = purchaseSlice.actions

export default purchaseSlice.reducer