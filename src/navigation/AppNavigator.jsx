import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../components/SplashScreen';
import HomeScreen from '../components/HomeScreen';
import RelatedProductsScreen from '../components/RelatedProductsScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RelatedProducts" component={RelatedProductsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
