import React, { useState, Fragment } from 'react';
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

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState({
    showModel: false,
    modalForContact: false,
  });

  return (
    <Fragment>
      <View>
        <MainNav />
      </View>
      <ScrollView style={styles.mainContainer}>
        <Showcase />

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
