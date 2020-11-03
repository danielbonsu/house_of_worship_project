import React, { useState } from 'react';

import Donate from './Modals/Donate';
import ContactUs from './Modals/ContactUs';

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
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
  faMobile,
  faPodcast,
} from '@fortawesome/free-solid-svg-icons';

const Footer = ({
  navigation,
  isModalVisible,
  setModalVisible,
  modalForContact,
}) => {
  const setDamnModalVisbile = (boolshit) => {
    setModalVisible(boolshit);
  };

  return (
    <View style={styles.stickFooterToBottomContainer}>
      <Modal
        style={styles.modalBox}
        animationType='slide'
        visible={isModalVisible}
        transparent={true}
      >
        <Donate isModalVisible={setDamnModalVisbile} />
      </Modal>

      <Modal
        animationType='fade'
        visible={modalForContact}
        transparent={true}
      >
        <ContactUs isModalVisible={setDamnModalVisbile} />
      </Modal>

      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.footerIcon}>
            <View>
              <FontAwesomeIcon
                color={'white'}
                icon={faHome}
                size={24}
              />
            </View>
            <View>
              <Text style={styles.footerText}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.footerIcon}
            onPress={() =>
              setDamnModalVisbile({
                showModel: true,
              })
            }
          >
            <View>
              <FontAwesomeIcon
                color={'#f4f4f4'}
                icon={faMoneyBill}
                size={24}
              />
            </View>
            <View>
              <Text style={styles.footerText}>Donate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerIcon}
            onPress={() => navigation.navigate('Prayer')}
          >
            <View>
              <FontAwesomeIcon
                color={'#fff'}
                icon={faPray}
                size={24}
              />
            </View>
            <View>
              <Text style={styles.footerText}>Prayer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerIcon}
            onPress={() => {
              navigation.navigate('Podcast');
            }}
          >
            <View>
              <FontAwesomeIcon
                color={'#fff'}
                icon={faPodcast}
                size={24}
              />
            </View>
            <View>
              <Text style={styles.footerText}>Podcast</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.footerIcon}
            onPress={() =>
              setDamnModalVisbile({
                modalForContact: true,
              })
            }
          >
            <View>
              <FontAwesomeIcon
                color={'white'}
                icon={faAddressBook}
                size={24}
              />
            </View>
            <View>
              <Text style={styles.footerText}>
                Contact Us
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 60,
    backgroundColor: '#212121',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  footerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // stickFooterToBottomContainer: {
  //   justifyContent: 'flex-end',
  //   flex: 1,
  // },

  footerIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#c5c5c5',
  },
  footerText: {
    color: '#fff',
    fontSize: 10,
    marginVertical: 5,
  },
  modalBox: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Footer;
