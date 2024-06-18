import { useEffect, useState } from 'react';
import { ProductResponse, ProductsResponse } from '../../../services/interfaces/Product';
import productController from '../../../services/api/Controller/ProductController';
import { useDispatch, useSelector } from 'react-redux';
import { productsResponse } from '../../../redux/reducers/productReducer';
import { RootState } from '../../../redux/reducers';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigation/AppNavigation';
import { selectProduct, setProductList } from '../../../redux/actions';

type ProductsListHookProps = {
    navigation: StackNavigationProp<RootStackParams, 'ProductsListScreen', undefined>
}

const ProductsListHook = ({ navigation }: ProductsListHookProps) => {
    const {
        username,
        token,
    } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const [ products, setProducts ] = useState<ProductsResponse>(productsResponse);
    const [ skip, setSkip ] = useState<number>(0);
    const [ isLoading, setIsLoading ] = useState(false);
    const [allProductsLoaded, setAllProductsLoaded] = useState(false);

    const getProducts = async () => {
        if (isLoading || allProductsLoaded) {
            return;
        }
        setIsLoading(true);
        if (username && token){
            const value =  await productController.getProducts(10,skip);
            if (value.products.length > 0) {
                setProducts(prevProducts => ({
                    ...prevProducts,
                    products: [...prevProducts.products, ...value.products],
                }));
                dispatch(setProductList(value));
            }

        }else {
            setAllProductsLoaded(true);
        }
        setTimeout(()=> setIsLoading(false), 1500);

    };
    console.log('Productos: ', products.products);

    const loadMoreProducts = async () => {
        getProducts();
        setSkip(prevSkip => prevSkip + 10);
    };

    const onCLickProduct = (productResponse: ProductResponse) => {
        dispatch(selectProduct(productResponse));
        navigation.navigate('ProductDetailScreen');
    };

    useEffect(() => {
        getProducts();
    }, []);

    return {
        products,
        onCLickProduct,
        loadMoreProducts,
        isLoading,
    };
};

export default ProductsListHook;
