import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CartSection from './CartSection';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.imgcontainer}>
          <Image
            source={require('../assets/images/a.jpeg')}
            style={styles.image}
          />
        </View>

        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#e7dada"
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name="search" size={20} color="#e7dada" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.rightIconContainer}>
          <Ionicons name="notifications-outline" size={26} color="#e7dada" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.peak}>
          PEAK PREMIUM <Text style={styles.accessories}>ACCESSORIES</Text>
        </Text>
        <Text style={styles.buy}>Buy Now, Pay Later</Text>
      </View>

      <View style={styles.products}>
        <View style={styles.content}>
          <Text style={styles.featured}>Featured</Text>
          <Text style={styles.prod}>PRODUCTS</Text>
        </View>
        <CartSection/>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A1F',
    paddingTop: 40,
  },
  topcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  imgcontainer: {
    width: 45,
    height: 45,
    borderRadius: 22,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  inputcontainer: {
    flex: 1,
    marginHorizontal: 10,
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#1E242A',
    color: '#fff',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
  },
  rightIconContainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 6,
  },
  peak: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: '900',
  },
  accessories: {
    color: '#E7B500',
    fontSize: 50,
    fontWeight: '900',
  },
  buy: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
  },
  products: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 30,
  },
  featured: {
    color: '#ffffff',
    fontSize: 14,
  },
  prod: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
  },
});
