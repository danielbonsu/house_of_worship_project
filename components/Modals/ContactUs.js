import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import React from 'react';

const ContactUs = (props) => {
  const { hideModal } = props;
  return (
    <View style={styles.container}>
      <View style={styles.Card}>
        <Text style={styles.contactUs}>
          Current Worship Address 1928 Frederick
          Road Catonsville, MD 21228 Service Times
          Sundays at 2PM & Wednesdays (livestream
          only) at 7:30PM Mailing Address P.O. Box
          442 Owings Mills, MD 21117 Telephone
          410-902-0060
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.modalBtn}
        onPress={() => {
          props.isModalVisible({
            modalForContact: false,
          });
        }}
      >
        <Text style={styles.closeText}>
          Close
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#f1f1f1',
    padding: 20,
  },
  Card: {
    // flex: 1,
    width: '90%',
    height: 150,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    borderRadius: 2,
    borderWidth: 1,
    flexDirection: 'row',

    // borderBottomColor: '#777',

    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtn: {
    backgroundColor: '#ff5252',
    width: '100%',
  },

  contactUs: {
    padding: 20,
    textAlign: 'center',
  },

  modalBtn: {
    backgroundColor: '#ff5252',
    width: '100%',
  },

  closeText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});

export default ContactUs;
