import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
} from 'react-native';

import React from 'react';
import CustomBanner from '../Custom Components/CustomBanner';
const zoomData = {
  id: '856 7259 9183',
  passcode: '654321',
};

const UpcomingEventItem = ({ event }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../images/gradient1.jpg')}
        />
        <View style={styles.imgOverlay}>
          <Text style={styles.eventTitle}>
            {event.eventTitle}
          </Text>
          <Text style={styles.eventDate}>
            {event.eventDate}
          </Text>
        </View>
      </View>
      {event.zoom && (
        <View style={styles.zoomContainer}>
          {event.zoom && (
            <Image
              source={require('../../images/zoomIcon2.png')}
              style={styles.zoomIcon}
            />
          )}
          {event.zoom && (
            <View style={styles.zoomDetails}>
              <Text style={styles.zoomText}>
                Zoom Id: {zoomData.id}
              </Text>
              <Text style={styles.zoomText}>
                Zoom Passcode: {zoomData.passcode}
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 260,
    height: 350,
    backgroundColor: '#000',
    margin: 5,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#555',
    borderTopLeftRadius: 5,
    borderTopEndRadius: 5,
    padding: 5,
  },

  eventContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  eventTitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    // position: 'absolute',
    // top: 30,
    // left: 10,
  },

  eventDate: {
    color: '#c3c3c3',
    marginTop: 10,
  },

  eventBanner: {
    width: '100%',
    height: 50,
    backgroundColor: '#111',
    borderWidth: 1,
    borderColor: '#222',
  },
  img: {
    width: '100%',
    height: '80%',
  },

  zoomContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // margin: 10,
    // marginTop: 20,
    backgroundColor: '#111',
    borderWidth: 1,
    borderColor: '#222',
    padding: 10,
  },
  zoomIcon: {
    width: 40,
    height: 40,
  },

  zoomText: {
    color: '#fff',
    fontSize: 12,
  },

  zoomDetails: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgOverlay: {
    position: 'absolute',
    width: '100%',
    height: '80%',
    backgroundColor: '#311b92',
    opacity: 0.8,
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
});
export default UpcomingEventItem;
