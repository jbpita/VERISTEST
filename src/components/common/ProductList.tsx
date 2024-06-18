import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProductResponse } from '../../services/interfaces/Product';
import { theme } from '../../core/theme';

type Props = {
    product: ProductResponse,
    onCLickProduct: (productResponse: ProductResponse) => void,
}
const ProductList = ({ product, onCLickProduct }: Props) => {
    const onCLick = () => {
        onCLickProduct(product);
    };

    return (
        <TouchableOpacity
            onPress={ () => onCLick() }
            activeOpacity={0.8}
            style={styles.touchable}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                        <Image
                            style={styles.imageContainer}
                            source={{ uri: product.images[0] }}
                            resizeMode="cover"
                        />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.productName}>{product.title}</Text>
                    <Text style={styles.productPrice}>${product.price}</Text>
                    <Text style={styles.productDescription}>{product.category}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        marginHorizontal: 2,
        paddingBottom: 5,
        paddingHorizontal: 2,
        height: 300,
    },
    container: {
        flex: 1,
        flexDirection: 'row', // Align items in a row
        marginVertical: 8,
        backgroundColor: theme.colors.secondary,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors.surface,
    },
    imageContainer: {
        flex: 1, // Take up half the space
        padding: 2,
        margin: 8,
        borderRadius: 10,
        backgroundColor: theme.colors.buttonBorder,
    },
    detailsContainer: {
        flex: 1, // Take up half the space
        padding: 10,
        justifyContent: 'center',
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        color: theme.colors.surface,
        marginBottom: 5,
    },
    productDescription: {
        fontSize: 14,
        color: theme.colors.surface,
    },
});

export default ProductList;
