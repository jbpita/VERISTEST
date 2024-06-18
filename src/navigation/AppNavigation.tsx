import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/screens/LoginScreen';
import ProductsListScreen from '../components/screens/ProductsListScreen';
import { theme } from '../core/theme';
import ProductDetailScreen from '../components/screens/ProductDetailScreen';

export type RootStackParams = {
    LoginScreen: undefined,
    ProductsListScreen: undefined,
    ProductDetailScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerStyle: {
                  elevation: 0,
                  shadowColor: 'transparent',
                  backgroundColor: theme.colors.surface,
                },
                headerTitleStyle: {
                  color: theme.colors.primary,
                },
                cardStyle: {
                  backgroundColor: 'white',
                },

              }}
        >
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductsListScreen"
              component={ProductsListScreen}
              options={{
                title: 'Lista de Productos',
              }}
            />
            <Stack.Screen
              name="ProductDetailScreen"
              component={ProductDetailScreen}
              options={{
                title: 'Detalle',
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
