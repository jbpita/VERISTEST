import { createReducer } from '@reduxjs/toolkit';
import { setProductList, clearSelectedProduct, selectProduct } from '../actions/productActions';
import { ProductsState } from '../types/productTypers';
import { Dimensions, Meta, ProductResponse, ProductsResponse } from '../../services/interfaces/Product';

export const productsResponse: ProductsResponse = {
  products: [],
  total:    0,
  skip:     0,
  limit:    0,
};

const dimensions: Dimensions = {
  width:  0,
  height: 0,
  depth:  0,
};

const meta: Meta = {
  createdAt: '',
  updatedAt: '',
  barcode:   '',
  qrCode:    '',
};

export const productResponse: ProductResponse = {
id:                   0,
title:                '',
description:          '',
category:             '',
price:                0,
discountPercentage:   0,
rating:               0,
stock:                0,
tags:                 [],
brand:                '',
sku:                  '',
weight:               0,
dimensions:           dimensions,
warrantyInformation:  '',
shippingInformation:  '',
availabilityStatus:   '',
reviews:              [],
returnPolicy:         '',
minimumOrderQuantity: 0,
meta:                 meta,
thumbnail:            '',
images:               [],
};

const initialState: ProductsState = {
  productList: productsResponse,
  selectedProduct: null,
};

const productReducer = createReducer<ProductsState>(initialState, (builder) => {
  builder
    .addCase(setProductList, (state, action) => {
      return { ...state, productList: action.payload };
    })
    .addCase(selectProduct, (state, action) => {
      return { ...state, selectedProduct: action.payload };
    })
    .addCase(clearSelectedProduct, (state) => {
      return { ...state , selectedProduct: null };
    });
});

export default productReducer;
