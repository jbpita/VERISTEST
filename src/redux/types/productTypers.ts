import { ProductResponse, ProductsResponse } from "../../services/interfaces/Product";

export interface ProductsState {
    productList: ProductsResponse;
    selectedProduct: ProductResponse | null;
}
