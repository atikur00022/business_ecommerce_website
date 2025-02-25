import { configureStore } from '@reduxjs/toolkit';
import settingReducer from '../stateSlice/settingSlice.js';
import userRoleReducer from '../stateSlice/userRoleSlice.js';

export default configureStore({
    reducer: {
        setting: settingReducer,
        usersRole: userRoleReducer,
    },
})