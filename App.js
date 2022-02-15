// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from './store';
import HomeScreen from './src/modules/home'
import DetailsScreen from './src/modules/detailsScreen'
import CartItems from './src/components/cartItems'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#fff159',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <CartItems />
              ),
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              title: 'Detalhes',
              headerStyle: {
                backgroundColor: '#fff159',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <CartItems />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;