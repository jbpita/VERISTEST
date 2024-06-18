import { createAction } from '@reduxjs/toolkit';
import { ProductResponse, ProductsResponse } from '../../services/interfaces/Product';

export const setProductList = createAction<ProductsResponse>('product/setProductList');
export const selectProduct = createAction<ProductResponse>('product/selectProduct');
export const clearSelectedProduct = createAction('product/clearSelectedProduct');
