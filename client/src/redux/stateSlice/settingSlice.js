import { createSlice } from '@reduxjs/toolkit'

export const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        loader: "d-none",
    },
    reducers: {
        showLoader: (state) => {
            state.loader = "d-flex"
        },
        hideLoader: (state) => {
            state.loader = "d-none"
        }
    },
})

export const { showLoader, hideLoader } = settingSlice.actions

export default settingSlice.reducer