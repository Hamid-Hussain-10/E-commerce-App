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
import { useNavigation } from '@react-navigation/native';

const CartSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => navigation.navigate('RelatedProducts', { product: item })}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.category}>{item.category}</Text>

            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>

            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>★ {item.rating?.rate}</Text>
            </View>
          </View>
        </TouchableOpacity>
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
    elevation: 5,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  category: {
    color: '#9CA3AF',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  title: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 6,
  },
  ratingContainer: {
    marginTop: 4,
  },
  rating: {
    color: '#E7B500',
    fontSize: 18,
  },
});
