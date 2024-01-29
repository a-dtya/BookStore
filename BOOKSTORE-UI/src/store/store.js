import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './combine';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(thunk)))

export default store ;
