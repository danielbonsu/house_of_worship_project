import React from 'react';
import CustomButton from '../CustomButtons';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
  Image,
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
        <View style={styles.card}>
          <Image source={image} style={styles.img}></Image>
          <View style={styles.pastorDetails}>
            <Text style={styles.text}>{name}</Text>

            <View style={styles.pastorPreviewBTN}>
              <Text style={styles.pastorPreviewBTNText}>
                View Info
              </Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // padding: 10,
    margin: 3,
    backgroundColor: '#202020',
    width: 140,
    // height: 590,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },

  img: {
    // margin: 5,
    width: '100%',
    height: '60%',
  },

  banner: {
    width: '100%',
    padding: 10,
    backgroundColor: '#333',
  },

  pastorDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  pastorPreviewBTN: {
    backgroundColor: '#1a237e',
    padding: 9,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    width: 130,
  },

  pastorPreviewBTNText: {
    color: '#9fa8da',
    textAlign: 'center',
  },

  imgContainer: {
    flex: 1,

    height: 275,
  },

  memberName: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },

  nameBanner: {
    width: '100%',
  },

  text: {
    color: '#fff',
    zIndex: 99,
  },
});

export default StaffContainer;
