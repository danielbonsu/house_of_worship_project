import React, {
  useState,
  Fragment,
  useEffect,
} from 'react';
import { moduleName } from 'react-native';

import BurgerMenuIcon from '../HamburgerMenu';
import MainNav from '../MainNav';
import MainSection from '../MainSection';

import Footer from '../Footer';
import Showcase from '../Showcase';

const setDamnModalVisible = (boolshit) => {
  setModalVisible({
    ...isModalVisible,
    ...boolshit,
  });
};

import UpcomingEvent from '../Events&Calenders/UpcomingEventsContainer';

import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TouchableHighlight,
} from 'react-native';
import { UpcomingEvents } from '../Events&Calenders/UpcomingEventData';
import UpcomingEventContainer from '../Events&Calenders/UpcomingEventsContainer';
import UpcomingEventsContainer from '../Events&Calenders/UpcomingEventsContainer';
import AnnouncementCard from '../AnnouncementCard';
const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState({
    showModel: false,
    modalForContact: false,
  });

  const [showAnnouncement, setShowAnnouncement] = useState(
    true
  );

  useEffect(() => {
    setTimeout(() => {
      setShowAnnouncement(false);
    }, 9000);
  }, [showAnnouncement]);
  return (
    <Fragment>
      {showAnnouncement && <AnnouncementCard />}

      <View>
        <MainNav />
      </View>
      <ScrollView style={styles.mainContainer}>
        <Showcase />

        <UpcomingEventsContainer />

        <MainSection navigation={navigation} />
      </ScrollView>
      <Footer
        isModalVisible={isModalVisible.showModel}
        modalForContact={isModalVisible.modalForContact}
        setModalVisible={setDamnModalVisible}
        navigation={navigation}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
  },

  mainSection: {
    height: 250,
    backgroundColor: '#fff',
  },

  container: {
    marginTop: 70,
    padding: 5,
    backgroundColor: '#fff',
  },

  text: {
    textAlign: 'center',
    color: '#fff',
  },

  mainContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});

export default HomeScreen;
