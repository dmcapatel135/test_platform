import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "isLoading" :"",
}

const auth = createSlice({
    name:"authReducer",
    initialState:initialState,
    reducers : {
        login : (state, payload) => {
           state.isLoading = payload
        }
    }
})

export const {
    login,
} = auth.actions;

export default auth.reducer;