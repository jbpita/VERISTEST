import { productsResponse } from '../../../redux/reducers/productReducer';
import { ProductsResponse } from '../../interfaces/Product';
import dummyApi from '../configure/connection';

export class ProductRepository {

    constructor() {}

    async getProducts(
        limit = 10,
        skip = 0,
    ): Promise<ProductsResponse> {
        let productsList: ProductsResponse = productsResponse;
        try {
            const response = await dummyApi.get<ProductsResponse>(`/products?limit=${limit}&skip=${skip}`);
            productsList = response.data;
        } catch (error) {
            console.log('SEREVER ERROR: ', error);
        }
        return productsList;
    }
}