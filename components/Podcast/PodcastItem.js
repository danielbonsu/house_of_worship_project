import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';

import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PodcastItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../images/houseOfWorshipLogo.png')}
        />
      </View>
      <View style={styles.PodcastItemDetails}>
        <Text style={styles.PodcastItemDetailsText}>
          {data}
        </Text>
      </View>
      <View style={styles.playBTN}>
        <View style={styles.playBTNContainer}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name='play-circle'
              size={70}
              color='#fff'
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#5c6bc0',
    padding: 3,
    margin: 10,
    borderRadius: 1000,
  },

  text: {},

  logo: {
    width: 60,
    height: 60,
  },
  logoContainer: {
    width: '18%',
    borderRadius: 1000,
    backgroundColor: '#2979ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  PodcastItemDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PodcastItemDetailsText: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
  },

  playBTNContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a237e',
    borderRadius: 1000,
    opacity: 0.5,
  },
});

export default PodcastItem;
