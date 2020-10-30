import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const SubmitButton = ({
  color,
  title,
  onPress,
  btnSecondary,
}) => {
  return (
    <View
      style={
        btnSecondary ? stylesCustom.submit : styles.submit
      }
    >
      <Button
        type='submit'
        color={color}
        title={title}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#000',
    width: '90%',
    padding: 5,
    marginVertical: 10,
    marginLeft: -20,
    borderRadius: 8,
  },
});

const stylesCustom = StyleSheet.create({
  submit: {
    backgroundColor: '#0277bd',
    width: '90%',
    padding: 5,
    marginVertical: 10,
    borderRadius: 8,
    marginLeft: -20,
  },
});

export default SubmitButton;
