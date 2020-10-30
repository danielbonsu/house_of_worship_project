import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import React from 'react';
import PodcastBanner from '../Podcast/PodcastBanner';
import PodcastItem from '../Podcast/PodcastItem';
import CustomBackground from '../Custom Components/CustomBackground';
import MainNav from '../MainNav';

const PodcastScreen = () => {
  const podcastData = [
    'We hope you are blessed by this message!If you need prayer for anything leave a prayer request at ',
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ];
  return (
    <View>
      <CustomBackground />
      <PodcastBanner />
      <ScrollView>
        {podcastData.map((item, idx) => (
          <PodcastItem key={idx} data={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default PodcastScreen;
