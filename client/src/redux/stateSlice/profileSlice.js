import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        details: [],
    },
    reducers: {
        setProfile: (state, action) => {
            state.details = action.payload
        },
    },
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer