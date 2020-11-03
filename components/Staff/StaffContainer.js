import React, { Fragment } from 'react';
import Staffs from './StaffCard';
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
} from 'react-native';
const StaffContainer = () => {
  const pastorsData = [
    {
      label: 'singers',
      image: require('../../images/groupPic1.jpg'),
      name: '',
    },
    // {
    //   label: 'singers',
    //   image: require('../../images/ourPastors2.jpg'),
    //   name: 'Pastor Fiifi Pentsil',
    // },
    // {
    //   label: 'singers',
    //   image: require('../../images/ourPastors3.jpg'),
    //   name: 'Pastor Fiifi Pentsil',
    // },
  ];
  return (
    <ScrollView
      style={styles.mainContainer}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {pastorsData.map((staff, idx) => (
        <Staffs key={idx} staff={staff} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    // flexDirection: 'row',
  },
});

export default StaffContainer;
