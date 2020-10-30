import { Text, View, StyleSheet } from 'react-native';
import {
  faHandPointDown,
  faUser,
  faKey,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import React, {
  showAlert,
  Fragment,
  useState,
} from 'react';

const CustomAlert = ({ errorMsg }) => {
  return (
    <Fragment>
      <View style={styles.AlertContainer}>
        <View style={styles.AlertIconContainer}>
          <FontAwesomeIcon
            style={styles.AlertIcon}
            icon={faExclamationTriangle}
            size={22}
            color='red'
          />
        </View>
        <View style={styles.ErrorMessage}>
          <Text style={styles.text}>{errorMsg}</Text>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  AlertContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  AlertIconContainer: {
    width: 40,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
  },
  AlertIcon: {
    alignSelf: 'flex-start',
  },

  text: {
    fontSize: 18,
    color: 'red',
  },
});
export default CustomAlert;
