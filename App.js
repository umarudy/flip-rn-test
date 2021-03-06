import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

// highlight: using navigation library
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Transaction, Details} from './src/features/transactions/screens/index';
import {StateProvider} from './src/utils/context';

const App = () => {
  const initialState = {sortBy: 'aToZ'};

  // highlight: added reducer 
  const reducer = (state, action) => {
    switch (action.type) {
      case 'sortingBy':
        return {
          ...state,
          sortBy: action.sortingBy,
        };
      default:
        return state;
    }
  };

  const Stack = createStackNavigator();

  return (
    // highlight: added Provider given initialState and reducer in stateProvider.
    <NavigationContainer>
      <StateProvider initialState={initialState} reducer={reducer}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{flex: 1}}>
              <Stack.Navigator initialRouteName="Transaction" >
                <Stack.Screen name="Transaction" component={Transaction} options={{headerShown: false}}/>
                <Stack.Screen name="Details" component={Details} />
              </Stack.Navigator>
            </SafeAreaView>
      </StateProvider>
    </NavigationContainer>
  );
};

export default App;
