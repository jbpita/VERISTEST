import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
