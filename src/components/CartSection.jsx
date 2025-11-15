import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const CartSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: 'Apple AirPods',
        image: require('../assets/images/headphone.png'),
        price: 249,
        rating: 4.8,
      },
      {
        id: 2,
        name: 'Wireless Headphones',
        image: require('../assets/images/headphone1.png'),
        price: 399,
        rating: 4.9,
      },
      {
        id: 3,
        name: 'Wireless Mouse',
        image: require('../assets/images/black_mouse.png'),
        price: 349,
        rating: 4.6,
      },
      {
        id: 4,
        name: 'Apple AirPods Pro',
        image: require('../assets/images/apple_airpods.png'),
        price: 229,
        rating: 4.7,
      },
      {
        id: 5,
        name: 'Mechanical Keyboard',
        image: require('../assets/images/keyboard.png'),
        price: 199,
        rating: 4.5,
      },
      {
        id: 6,
        name: 'Lenovo Laptop',
        image: require('../assets/images/laptop_lenovo.jpeg'),
        price: 899,
        rating: 4.7,
      },
      {
        id: 7,
        name: 'Gaming Monitor',
        image: require('../assets/images/gaming_monitor.png'),
        price: 499,
        rating: 4.6,
      },
      {
        id: 8,
        name: 'USB Charger',
        image: require('../assets/images/charger.png'),
        price: 49,
        rating: 4.4,
      },
      {
        id: 9,
        name: 'Bluetooth Earbuds',
        image: require('../assets/images/earbud.png'),
        price: 99,
        rating: 4.5,
      },
      {
        id: 10,
        name: 'Wired Earphones',
        image: require('../assets/images/earphone.png'),
        price: 39,
        rating: 4.3,
      },
      {
        id: 11,
        name: 'Smart Watch',
        image: require('../assets/images/watch.png'),
        price: 149,
        rating: 4.6,
      },
      {
        id: 12,
        name: 'Anti-Blue Light Glasses',
        image: require('../assets/images/glass.png'),
        price: 29,
        rating: 4.2,
      },
      {
        id: 13,
        name: '1TB Flash Drive',
        image: require('../assets/images/1tb_usb.png'),
        price: 59,
        rating: 4.5,
      },
      {
        id: 14,
        name: 'Desktop PC',
        image: require('../assets/images/desktop.png'),
        price: 999,
        rating: 4.7,
      },
    ];

    setTimeout(() => {
      setProducts(data);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#E7B500" />
      </View>
    );
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.cartContainer}
    >
      {products.map(item => (
        <View key={item.id} style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.add}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.category}>Wireless</Text>
          <Text style={styles.title} numberOfLines={1}>
            {item.name}
          </Text>

          <View style={styles.ratingContainer}>
            {[...Array(5)].map((_, i) => (
              <Text style={styles.rating}>★</Text>
            ))}
          </View>

          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CartSection;

const styles = StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141A1F',
    height: 200,
  },
  cartContainer: {
    paddingLeft: 16,
    marginTop: 10,
    height: 200,
  },
  card: {
    backgroundColor: '#1E242A',
    borderRadius: 16,
    width: 200,
    height: 350,
    marginRight: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  addButton: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#E7B500',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  add: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 900,
  },
  category: {
    color: '#9CA3AF',
    fontSize: 14,
    marginTop: 6,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  rating: {
    color: '#E7B500',
    fontSize: 20,
    fontWeight: '700',
  },
  price: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 6,
  },
});
