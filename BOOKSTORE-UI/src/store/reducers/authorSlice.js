import { createSlice } from "@reduxjs/toolkit";
import { getAuthors } from "../../services/authorService";

const initailAuthors = await getAuthors()
const initialState = {
  authors:initailAuthors,
  authorID:''

}
export const authorSlice = createSlice({
  name: 'authors',
  initialState: initialState,
  reducers: {
    setAuthors: (state, action) => {
      return state = action.payload;
    },
    authorId:(state , action )=>{
        state.authorID = action.payload;
    }
  }
})

export const { authorId,setAuthors } = authorSlice.actions;

export default authorSlice.reducer;