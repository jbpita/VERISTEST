import React from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/AppNavigation';
import ProductList from '../common/ProductList';
import { theme } from '../../core/theme';
import ProductsListHook from '../hooks/screens/ProductsListHook';
import { setProductList } from '../../redux/actions';
import { connect } from 'react-redux';

interface Props extends StackScreenProps<RootStackParams, 'ProductsListScreen'>{}

const ProductsListScreen = ({ navigation }: Props) => {

    const {
        products,
        onCLickProduct,
        loadMoreProducts,
        isLoading,
    } = ProductsListHook({navigation});

    return (
        <View style={styles.container}>
            <FlatList
                data={products.products}
                renderItem={({item}) => (
                  <ProductList
                    onCLickProduct={onCLickProduct}
                    product={item}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                onEndReached={loadMoreProducts}
                onEndReachedThreshold={0.5}
                ListFooterComponent={isLoading ? <ActivityIndicator size="large" color={theme.colors.primary} /> : null}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surface,
    },
});

const mapDispatchToProps = {
    setProductList,
};


export default connect(null, mapDispatchToProps)(ProductsListScreen);
