import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartSection from './CartSection';

const HomeScreen = ({}) => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [triggerSearch, setTriggerSearch] = useState(false);

  // Receive product list from CartSection
  const handleProductsLoaded = data => {
    setAllProducts(data);
  };

  const onSearchChange = text => {
    setSearchText(text);

    if (!text.trim()) {
      setSuggestions([]);
      return;
    }

    const match = allProducts.filter(p =>
      p.title.toLowerCase().includes(text.toLowerCase()),
    );

    setSuggestions(match.slice(0, 6)); // show top 6 results
  };

  const handleSuggestionPress = item => {
    setSearchText(item.title);
    setSuggestions([]);
    setTriggerSearch(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.imgcontainer}>
          <Image
            source={require('../assets/images/watch2.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#e7dada"
            value={searchText}
            onChangeText={onSearchChange}
          />

          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => setTriggerSearch(prev => !prev)}
          >
            <Ionicons name="search" size={20} color="#e7dada" />
          </TouchableOpacity>

          {suggestions.length > 0 && (
            <View style={styles.suggestionBox}>
              <FlatList
                data={suggestions}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.suggestionItem}
                    onPress={() => handleSuggestionPress(item)}
                  >
                    <Text style={{ color: 'white' }}>{item.title}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
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

        <CartSection
          searchText={searchText}
          triggerSearch={triggerSearch}
          onProductsLoaded={handleProductsLoaded}
        />
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
  suggestionBox: {
    backgroundColor: '#1E242A',
    position: 'absolute',
    top: 45,
    width: '100%',
    borderRadius: 8,
    zIndex: 10,
    paddingVertical: 5,
  },

  suggestionItem: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
});
