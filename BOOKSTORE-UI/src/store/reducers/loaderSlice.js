 import { createSlice } from "@reduxjs/toolkit";
import { UserSevice } from "../../services/userService";

 const initialState ={  
 isloader :false
}
 const loaderSlice = createSlice({
    name : "Loader",
    initialState,
    reducers:{
    }
    ,extraReducers :{
        [UserSevice.pending]:(state,action)=>{
            console.log(action);
            state.isloader=true
        },
        [UserSevice.fulfilled]:(state,action)=>{
            state.isloader =false
        },
        [UserSevice.rejected]:(state,action)=>{
            console.log(action);
        }
    }
 })

 export const {loader } = loaderSlice.actions

 export default loaderSlice.reducer