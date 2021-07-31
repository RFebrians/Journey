import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import DetailScreen2 from '../screens/DetailScreen2';



const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress
      }
    };
  }
};

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='Home'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen
          name='DetailScreen'
          component={DetailScreen}
          options={() => options}
        />
         <Stack.Screen
          name='DetailScreen2'
          component={DetailScreen2}
          options={() => options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
