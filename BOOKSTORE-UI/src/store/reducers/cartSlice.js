import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {book} = action.payload
      console.log('book from addToCart:------>',book._id);
      // console.log('book from addToCart:------>',book._id);

      const foundBook = state.find(product => product.book._id === action.payload.book._id)
      if (foundBook) {
        return state = increaseQuantity(state, action)
      } else {
        return state = [...state, action.payload]
      }
    },
    increaseBookQuantity: (state, action) => {
      return state = state.map(product => {
        if (product.book._id === action.payload.book._id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product
      })
    },
    decreaseBookQuantity: (state, action) => {
      return state = state.map(product => {
        if (product.book._id === action.payload.book._id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product
      })
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter(item => item.book._id !== action.payload.book._id);
      return updatedCart;
    },
    
    emptyCart: (state, action) => {
      return state = []
    }
  }
})


const increaseQuantity = (state, action) => {
  return state.map(product => {
    if (product.book._id === action.payload.book._id) {
      return { ...product, quantity: product.quantity + action.payload.quantity };
    }
    return product
  })
}

export const updateCartInLocalStorage =  (state) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

export const { addToCart, increaseBookQuantity, decreaseBookQuantity, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;