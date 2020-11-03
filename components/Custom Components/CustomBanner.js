import { View, StyleSheet } from 'react-native';

import React from 'react';

const CustomBanner = ({ children }) => {
  return <View style={styles.bannerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  bannerStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#111',
    borderWidth: 1,
    borderColor: '#222',
  },
});
export default CustomBanner;
