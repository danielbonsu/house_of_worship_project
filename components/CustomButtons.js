import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomButtons = ({ children, style }) => {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#000',
    marginHorizontal: 5,
    opacity: 0.6,
  },

  text: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default CustomButtons;
