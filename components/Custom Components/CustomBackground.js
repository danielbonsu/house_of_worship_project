import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

import React from 'react';

const CustomBackground = (children) => {
  return (
    <ImageBackground
      source={require('../../images/churchWorship1.jpg')}
      style={styles.Main}
    >
      <View style={styles.overlay}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(70, 70, 93)',
    height: Dimensions.get('window').height,
  },
  overlay: {
    backgroundColor: '#0d47a1',
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').height,
    height: Dimensions.get('window').height,
    flex: 1,
    opacity: 0.9,
  },
});
export default CustomBackground;
