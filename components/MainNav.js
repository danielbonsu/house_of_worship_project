import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
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
} from '@fortawesome/free-solid-svg-icons';

const MainNav = () => {
  return (
    <View style={styles.mainBar}>
      <TouchableOpacity>
        <FontAwesomeIcon
          style={styles.burgerMenu}
          icon={faBars}
          size={28}
        />
      </TouchableOpacity>

      <Image
        source={require('../images/houseOfWorshipLogo.png')}
        style={styles.churchLogo}
      />
      <FontAwesomeIcon
        color={'#fff'}
        icon={faCalendarTimes}
        size={24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainBar: {
    width: '100%',
    height: 130,
    backgroundColor: '#01579b',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 20,
  },

  burgerMenu: {
    color: '#fff',
    marginHorizontal: 10,
  },

  churchLogo: {
    width: 100,
    height: 100,
    marginLeft: 100,
    marginRight: 80,
    marginTop: 40,
    position: 'absolute',
    top: 0,
    left: 65,
    padding: 30,
    borderRadius: 100,
  },

  text: {
    textAlign: 'center',
    color: '#fff',
  },
});
export default MainNav;
