import React from 'react';
import CustomButton from '../CustomButtons';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';

const StaffContainer = ({
  staff: { image, name, About },
  navigation,
}) => {
  return (
    <View style={styles.imgContainer}>
      <TouchableNativeFeedback
        onPress={() =>
          navigation.navigate('PastorDetails', {
            image,
            name,
            About,
          })
        }
      >
        <ImageBackground
          source={image}
          style={styles.card}
        ></ImageBackground>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 1,
    // backgroundColor: '#444',
    width: 160,
    height: 170,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderRadius: 20000,
  },

  banner: {
    width: '100%',
    padding: 10,
    backgroundColor: '#333',
  },

  imgContainer: {
    flex: 1,

    borderWidth: 1,
    // borderColor: '#f1f1f1',
    height: 170,
  },

  memberName: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },

  nameBanner: {
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
  },

  text: {
    color: '#fff',
    zIndex: 99,
  },
});

export default StaffContainer;
