import { View, StatusBar } from 'react-native';
import React from 'react';
import SplashScreen from './src/components/SplashScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor="#00000000"
        barStyle="light-content"
      />

      <SplashScreen />
    </View>
  );
};

export default App;
