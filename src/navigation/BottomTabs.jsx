import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../components/HomeScreen';
import CartScreen from '../components/CartScreen';
import ProfileScreen from '../components/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <View style={styles.wrapper}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarStyle: styles.tabBar,

          tabBarShowLabel: false,

          tabBarIcon: ({ focused, color }) => {
            let iconName = 'home';

            if (route.name === 'Home')
              iconName = focused ? 'home' : 'home-outline';
            if (route.name === 'Cart')
              iconName = focused ? 'cart' : 'cart-outline';
            if (route.name === 'Profile')
              iconName = focused ? 'person' : 'person-outline';

            return (
              <Ionicons
                name={iconName}
                size={focused ? 28 : 24}
                color={focused ? '#E7B500' : '#898c90'}
                style={styles.icon}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#141A1F',
  },

  tabBar: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    height: 65,
    backgroundColor: '#1B1F25',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  icon:{
    paddingTop: 5,
  },
});
