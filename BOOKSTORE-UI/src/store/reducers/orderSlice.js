import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders } from "../../services/ordersService";

// const initailOrders = await getAllOrders();

export const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    setOrders: (state, action) => {
      return state = action.payload;
    }
  }
})

export const { setOrders } = orderSlice.actions;

export default orderSlice.reducer;