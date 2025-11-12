import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        
        {/* Left Profile Image */}
        <View style={styles.imgcontainer}>
          <Image
            source={require('../assets/images/a.jpeg')}
            style={styles.image}
          />
        </View>

        {/* Center Search Input + Icon */}
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

        {/* Right Icon */}
        <TouchableOpacity style={styles.rightIconContainer}>
          <Ionicons name="notifications-outline" size={26} color="#e7dada" />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A1F',
    paddingTop: 50,
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
    backgroundColor: '#1B1F25',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 40, // space for search icon
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
});
