import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCoffee,
  faHome,
  faHamburger,
  faBars,
  faSearch,
  faMoneyBill,
  faPray,
  faAddressBook,
  faCamera,
  faCalendar,
  faCalendarTimes,
  faDatabase,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

import PastorsContainer from '../components/Staff/PastorsContainer';
import StaffContainer from '../components/Staff/StaffContainer';

import SocialBar from './SocialBar';

const MainSection = ({ navigation }) => {
  return (
    <View style={styles.MainSectionContainer}>
      <SocialBar>Meet Our Pastors</SocialBar>
      <ScrollView horizontal={true} style={styles.members}>
        <PastorsContainer navigation={navigation} />
      </ScrollView>
      <SocialBar>Our Ministries </SocialBar>
      <ScrollView horizontal={true} sytle={styles.members}>
        <StaffContainer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainSectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    flex: 1,
    backgroundColor: '#111',
  },

  members: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },

  churchMembers: {
    width: 200,
    height: 200,
    borderWidth: 6,
    marginRight: 30,
    borderColor: '#fafafa',
  },
  headPastorImgContainer: {
    borderRadius: 200,
    borderWidth: 8,
    borderColor: '#eceff1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 220,
    height: 220,
    position: 'absolute',
    top: -230,
    left: 100,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowOffset: { width: 1, height: 1 },
  },
  mainSectionText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  mainSectionTextEdit: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  upcomingEventBanner: {
    marginTop: 44,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    position: 'absolute',
    top: 90,
    left: 20,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 10,
  },
  upcomingEventBannerText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default MainSection;
