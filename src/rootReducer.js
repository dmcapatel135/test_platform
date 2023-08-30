import { combineReducers } from "@reduxjs/toolkit";
import authenticationSlice from "./redux/Authentication/authentication.slice";

const rootReducer = combineReducers({
    authReducer : authenticationSlice,
})

export default rootReducer;