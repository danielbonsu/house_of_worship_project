import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const SocialBar = ({ children }) => {
  return (
    <View style={styles.outterContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default SocialBar;

const styles = StyleSheet.create({
  outterContainer: {
    backgroundColor: '#111',
    // borderWidth: 1,
    // borderColor: '#777',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: 16,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
