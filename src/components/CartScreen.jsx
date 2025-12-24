import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Black Mouse',
      color: 'Black',
      price: '$20',
      quantity: 1,
      image: require('../assets/images/Black Mouse.png'),
    },
    {
      id: '2',
      name: 'Gaming pc',
      color: 'Black',
      price: '$20',
      quantity: 1,
      image: require('../assets/images/Gaming pc.png'),
    },
    {
      id: '3',
      name: 'headphone',
      color: 'Red',
      price: '$20',
      quantity: 1,
      image: require('../assets/images/headphone2.png'),
    },
  ]);

  const updateQuantity = (id, type) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === 'inc'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartContainer}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.details}>
        <Text>{item.name}</Text>
        <Text>{item.color}</Text>
        <Text>{item.price}</Text>
      </View>

      <View style={styles.counter}>
        <TouchableOpacity onPress={() => updateQuantity(item.id, 'dec')}>
          <Text style={styles.btn}>-</Text>
        </TouchableOpacity>

        <Text>{item.quantity}</Text>

        <TouchableOpacity onPress={() => updateQuantity(item.id, 'inc')}>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b8b4b4',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    fontSize: 24,
    paddingHorizontal: 10,
    backgroundColor: '#E7B500',
    borderRadius: 6,
    marginHorizontal: 5,
  },
});
