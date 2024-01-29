import { combineReducers } from 'redux';
import booksSlice from './reducers/booksSlice'
import categorySlice from './reducers/categorySlice';
import authorSlice from './reducers/authorSlice';
import cartSlice from './reducers/cartSlice';
import loaderSlice from './reducers/loaderSlice';
import orderSlice  from './reducers/orderSlice';

export default combineReducers({
    books: booksSlice,
    categories: categorySlice,
    authors: authorSlice,
    cart: cartSlice,
    order:orderSlice,
    loader :loaderSlice,
});

