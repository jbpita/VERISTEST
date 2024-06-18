import { productsResponse } from '../../../redux/reducers/productReducer';
import { ProductsResponse } from '../../interfaces/Product';
import { ProductRepository } from '../Repository/ProductRepository';

class ProductController {
    private readonly _poductRepository: ProductRepository;
    constructor() {
        this._poductRepository = new ProductRepository();
    }

    async getProducts(
        limit = 10,
        skip = 0,
    ): Promise<ProductsResponse> {
        let aux: ProductsResponse = productsResponse;
        try {
            aux = await this._poductRepository.getProducts(limit,skip);
        } catch (error) {
            console.log('Error: ', error);
        }
        return aux;
    }
}

const productController = new ProductController();
export default productController;
