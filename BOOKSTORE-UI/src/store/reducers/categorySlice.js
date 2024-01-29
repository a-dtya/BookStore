import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../services/categoryService";

const initailCategories = await getCategories()


export const categorySlice = createSlice({
  name: 'categories',
  initialState: initailCategories,
  reducers: {
    setCategories: (state, action) => {
      console.log('action', action);
      return state = action.payload;
    },
    setBookCount: (state, action) => {
      const {bookCount} = action.payload;
      console.log('bookCount====>',bookCount);
    }
    
  }
});

export const { setCategories ,setBookCount} = categorySlice.actions;

export default categorySlice.reducer;
