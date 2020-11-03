import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import React, { Fragment } from 'react';
import { UpcomingEvents } from './UpcomingEventData';
import SocialBar from '../SocialBar';
import EventItem from './UpcomingEventItem';

const UpcomingEventsContainer = () => {
  return (
    <Fragment>
      <View style={styles.overallContainer}>
        <SocialBar>
          <Text>Upcoming Events</Text>
        </SocialBar>
        <ScrollView horizontal={true}>
          <View style={styles.mainContainer}>
            <View style={styles.eventsContainer}>
              {UpcomingEvents.map((event, idx) => (
                <EventItem key={idx} event={event} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  overallContainer: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default UpcomingEventsContainer;
