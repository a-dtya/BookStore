
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const UserSevice =  createAsyncThunk('post/getAll',async ()=>{
  const res = await axios.get("http://localhost:3001/users");
    console.log("res"); 
    return res.data
});

// import {createAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios";

// export  const getAllposts=createAsyncThunk('posts/getAll' ,async (url ,thunkAPI)=>{
//     const {rejectWithValue}=thunkAPI;
//     try{
//     const res= await axios.get(url);
//         return res.data;
//     }catch (err){
//         return rejectWithValue(err.message);
//     }

// })
