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

const Donate = (props) => {
  const { isModalVisible } = props;

  const setModalToHidden = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.Card}>
        <Text style={styles.whyGive}>
          The vision for our Capital Campaign is
          to raise $250,000 so we can move into
          8729 Church Lane in Randallstown
          Maryland. This will give us the space
          needed for youth programs, community
          engagement, health fairs, children’s
          activities, trainings, outreach and so
          much more. We need to expand our
          workforce development trainings and work
          closer with members of the community as
          they strive to be gainfully employed.
          When you join us for the Capital
          Campaign, you are investing in the local
          community and making a difference with
          us as we serve.
        </Text>
      </View>
      <TouchableOpacity style={styles.Card}>
        <Image
          source={require('../../images/cashApp.jpg')}
          style={styles.img}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Card}>
        <Image
          source={require('../../images/givelify.png')}
          style={styles.img}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Card}>
        <Image
          source={require('../../images/paypal.jpg')}
          style={styles.img}
        />
      </TouchableOpacity>
      {/* <View style={styles.Card}></View> */}
      {/* <View style={styles.Card}></View>
      <View style={styles.Card}></View>
      <View style={styles.Card}></View> */}

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.modalBtn}
        onPress={() => {
          props.isModalVisible({
            showModel: false,
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
    backgroundColor: '#212121',
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
    backgroundColor: '#01579b',
    width: '100%',
  },

  closeText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },

  img: {
    width: '100%',
    height: '100%',
    padding: 80,
  },
  whyGive: {
    padding: 20,
    textAlign: 'center',
  },
});

export default Donate;
