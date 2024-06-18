import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
