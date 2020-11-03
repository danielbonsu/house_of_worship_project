import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import MainNav from '../MainNav';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const PastorDetailsCard = ({ route }) => {
  const { image, name, About } = route.params;
  return (
    <View style={styles.mainContainer}>
      <MainNav />
      <View style={styles.card}>
        <ImageBackground
          source={require('../../images/churchWorship1.jpg')}
          style={styles.Header}
        >
          <View style={styles.Overlay}></View>
        </ImageBackground>

        <View style={styles.cardBody}>
          <View style={styles.outterimgContainer}>
            <View style={styles.innerimgContainer}>
              <Image source={image} style={styles.img} />
            </View>
          </View>

          <View style={styles.pastorInfo}>
            <View style={styles.pastorSocialBar}>
              <View style={styles.socialBar}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name='cellphone-iphone'
                    size={30}
                    color='#999'
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name='facebook-box'
                    size={30}
                    color='blue'
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name='whatsapp'
                    size={30}
                    color='green'
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name='instagram'
                    size={30}
                    color='orange'
                  />
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView>
              <Text style={styles.pastorInfoTitle}>
                {name}
              </Text>
              <Text style={styles.pastorInfoText}>
                {About}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1a237e',
  },
  card: {
    backgroundColor: '#fff',
    width: '80%',
    height: '80%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 20,
    marginTop: 20,
  },
  cardBody: {
    flex: 1,
  },

  outterimgContainer: {
    width: '55%',
    height: '40%',
    borderRadius: 200,
    backgroundColor: '#f8f8f8',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 9,
  },

  innerimgContainer: {
    width: '90%',
    height: '90%',
    borderRadius: 200,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',

    borderRadius: 200,
  },
  Header: {
    width: '100%',
    height: 100,
  },

  Overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: '#01579b',
    opacity: 0.9,
  },

  pastorInfo: {
    flex: 1,
    marginTop: 150,
    width: '100%',
    padding: 25,
  },

  pastorInfoText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#555',
  },
  pastorInfoTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  pastorSocialBar: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#444',
    padding: 10,
    margin: 10,
  },
  socialBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PastorDetailsCard;
