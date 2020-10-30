import {
  Image,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {
  getVerses,
  removeVerse,
} from './../redux/actions/GetVersesAction';

import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const Showcase = (props) => {
  const [data, setData] = useState(
    'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the  LORD  thy God  is  with thee whithersoever thou goest'
  );
  const dispatch = useDispatch();
  const { verses } = useSelector((state) => state.verses);
  console.log(verses.length);
  useEffect(() => {
    setInterval(() => {
      dispatch(getVerses());
    }, 2400000);
  }, [dispatch]);

  return (
    <View style={styles.showCase}>
      <ImageBackground
        source={require('../images/headerImg.jpg')}
        style={styles.showCaseBackgroundImage}
      >
        <View style={styles.overlay}></View>

        <View style={styles.bibleVerseContainer}>
          <View style={styles.bibleVerseContainerInner}>
            <View style={styles.verseViewContainer}>
              {verses.length === 0 ? (
                <Text style={styles.verse}>{data}</Text>
              ) : (
                <Text style={styles.verse}>
                  {verses.verse}
                  {verses.id}
                </Text>
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  showCase: {
    backgroundColor: '#eeeeee',
    width: '100%',
    height: 350,
  },
  showCaseBackgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1a237e',
    opacity: 0.9,
    zIndex: 5,
  },

  bibleVerseContainer: {
    width: 300,
    height: 300,
    backgroundColor: '#c5c5c5',
    position: 'absolute',
    zIndex: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    opacity: 0.6,
  },

  bibleVerseContainerInner: {
    width: '90%',
    height: '90%',
    backgroundColor: '#444',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // opacity: 0.6,
  },

  verseViewContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  verse: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
  },

  events: {
    // zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 200,
  },

  info: {
    width: 200,
    backgroundColor: '#ffebee',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
  },
  infoText: {
    color: '#000',
    textAlign: 'left',
  },
});

export default Showcase;
