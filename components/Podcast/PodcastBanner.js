import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Fragment } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PodcastBanner = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.bannerText}>PodCast</Text>
        <View style={styles.podcastSocialLinks}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name='facebook'
              size={30}
              color='#fff'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name='anchor'
              size={30}
              color='#fff'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name='spotify'
              size={30}
              color='#fff'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name='cellphone-iphone'
              size={30}
              color='#fff'
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.notificationBanner}>
        <Text style={styles.text}>
          You can listen to sermons on Apple Podcasts,
          Spotify, Anchor, or wherever you get your podcasts
        </Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2962ff',
    opacity: 0.8,
  },
  notificationBanner: {
    textAlign: 'center',
    backgroundColor: '#000',
    padding: 10,
  },
  bannerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  podcastSocialLinks: {
    width: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    color: '#fff',
    textAlign: 'center',
  },
});
export default PodcastBanner;
