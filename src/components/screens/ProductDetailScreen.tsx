import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { theme } from '../../core/theme';
import { RootStackParams } from '../../navigation/AppNavigation';
import { RootState } from '../../redux/reducers';
import { ProductResponse } from '../../services/interfaces/Product';
import { productResponse } from '../../redux/reducers/productReducer';

interface Props extends StackScreenProps<RootStackParams, 'ProductDetailScreen'>{}

const ProductDetailScreen = ({ navigation }: Props) => {
    const [ product, setProduct] = useState<ProductResponse>(productResponse);
    const {
        selectedProduct,
    } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        if (!selectedProduct) {
           navigation.navigate('ProductsListScreen');
        } else {
            setProduct(selectedProduct);
        }
    }, [selectedProduct]);

    return (
        <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imageContainer}
                        source={{ uri: product?.images.length ? product?.images[0] : 'https://www.youtube.com/img/desktop/yt_1200.png' }}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <View>
                        <Text>
                            SKU: {product.sku}
                        </Text>
                        <Text>
                            Marca: {product.brand}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Nombre: {product.title}
                        </Text>
                        <Text>
                            Precio: {product.price}
                        </Text>
                    </View>
                </View>
                <View style={styles.reviewsContainer}>
                    {
                        product.reviews.map((review,key) => (
                            <View key={key} style={styles.reviewContainer}>
                                <Text>{review.date}</Text>
                                <Text>{review.comment}</Text>
                                <Text>{review.reviewerName}</Text>
                            </View>
                        ))
                    }
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surface,
    },
    imageContainer: {
        flex: 1, // Take up half the space
        padding: 2,
        margin: 8,
        borderRadius: 10,
        backgroundColor: theme.colors.buttonBorder,
    },
    detailsContainer: {
      //  flex: 1, // Take up half the space
        padding: 10,
        margin: 8,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: theme.colors.secondary,
    },
    label: {
        color: theme.colors.secondary,
        paddingLeft: 4,
        opacity: 0.8,
    },
    reviewsContainer: {
        flex: 1,
    },
    reviewContainer: {
        padding: 10,
        margin: 8,
        borderRadius: 10,
        backgroundColor: theme.colors.secondary,
    },
});

export default ProductDetailScreen;
