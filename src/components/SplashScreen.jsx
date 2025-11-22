import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image
          source={require('../assets/images/splashimage.png')}
          style={styles.image}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Main')}
      >
        <Text style={styles.text}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    width: 400,
    height: 450,
    resizeMode: 'contain',
    position: 'absolute',
    top: 100,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    backgroundColor: '#fff',
    borderRadius: 26,
    cursor: "pointer",
    position: 'absolute',
    bottom: 80,
    elevation: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#141A1F',
  },
});
