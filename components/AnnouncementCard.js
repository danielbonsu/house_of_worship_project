import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AnnouncementCard = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(
    true
  );
  return (
    <View style={styles.announcementCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.announcementHeaderText}>
          Announcements
        </Text>
        <TouchableOpacity>
          <FontAwesomeIcon
            color={'#000'}
            icon={faTimes}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.announcementBodyTextHeader}>
        In-Person Gatherings Have Resumed
      </Text>
      <Text style={styles.announcementText}>
        In light of some restrictions being lifted we are
        resuming in-person gatherings. There are guidelines
        in place to keep everyone safe and to keep in
        accordance with the CDC.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  announcementCard: {
    width: '80%',
    backgroundColor: '#fff',
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    position: 'absolute',
    top: 200,
    left: 30,
    zIndex: 20000,
  },

  cardHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  announcementText: {
    width: '100%',
    height: 'auto',
  },

  announcementHeaderText: {
    fontSize: 18,
  },
  announcementBodyTextHeader: {
    fontSize: 14,
    color: 'red',
  },
});
export default AnnouncementCard;
