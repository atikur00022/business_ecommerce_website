import { createSlice } from '@reduxjs/toolkit'

export const userRoleSlice = createSlice({
    name: 'usersRole',
    initialState: {
        role: false,
    },
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload
        },
    },
})

export const { setRole } = userRoleSlice.actions

export default userRoleSlice.reducer