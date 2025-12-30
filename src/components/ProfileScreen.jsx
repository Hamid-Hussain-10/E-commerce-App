import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Switch,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProfileHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/images/profile.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Shop</Text>
      <Text style={styles.email}>shop7@email.com</Text>
    </View>
  );
};

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [darkMode, setDarkMode] = useState(true);
  const [logoutVisible, setLogoutVisible] = useState(false);

  return (
    <View style={[styles.container, darkMode && styles.darkBg]}>
      <ProfileHeader />

      <View style={styles.menuContainer}>
        <MenuItem
          icon="home-outline"
          label="Home"
          onPress={() => navigation.navigate('Home')}
        />

        <MenuItem icon="person-outline" label="Account" />

        <MenuItem icon="wallet-outline" label="Wallet" />

        {/* Night Mode */}
        <View style={styles.menuItem}>
          <Ionicons name="moon-outline" size={22} color="#fff" />
          <Text style={styles.menuText}>Night Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <MenuItem
          icon="log-out-outline"
          label="Logout"
          danger
          onPress={() => setLogoutVisible(true)}
        />
      </View>

      {/* Logout Modal */}
      <Modal transparent visible={logoutVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Logout</Text>
            <Text style={styles.modalText}>
              Are you sure you want to logout?
            </Text>

            <View style={styles.modalActions}>
              <Pressable
                style={styles.cancelBtn}
                onPress={() => setLogoutVisible(false)}
              >
                <Text style={styles.btnText}>Cancel</Text>
              </Pressable>

              <Pressable
                style={styles.logoutBtn}
                onPress={() => {
                  setLogoutVisible(false);
                  navigation.replace('Home');
                }}
              >
                <Text style={styles.btnText}>Logout</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileScreen;

const MenuItem = ({ icon, label, onPress, danger }) => {
  return (
    <Pressable style={styles.menuItem} onPress={onPress}>
      <Ionicons name={icon} size={22} color={danger ? '#ff4d4d' : '#fff'} />
      <Text style={[styles.menuText, danger && { color: '#ff4d4d' }]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A1F',
  },
  darkBg: {
    backgroundColor: '#0e1216',
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  email: {
    color: '#aaa',
    fontSize: 13,
  },

  menuContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'space-between',
  },

  menuText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginLeft: 15,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: '80%',
    backgroundColor: '#1e242a',
    borderRadius: 10,
    padding: 20,
  },

  modalTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },

  modalText: {
    color: '#aaa',
    marginBottom: 20,
  },

  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  cancelBtn: {
    marginRight: 15,
  },

  logoutBtn: {},

  btnText: {
    color: '#ff4d4d',
    fontSize: 15,
  },
});
