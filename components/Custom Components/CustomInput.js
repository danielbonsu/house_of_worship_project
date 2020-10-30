import React, { useState } from 'react';
import PhoneInput from 'react-native-phone-input';

import {
  faHandPointDown,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { color } from 'react-native-reanimated';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

import { useForm, Controller } from 'react-hook-form';

const CustomInput = ({
  name,
  icon,
  color,
  placeholder,
  borderstyleBottomRadius,
  onChangeText,
  onBlur,
  value,
  secureTextEntry,
  phoneField,
}) => {
  const { control, handleSubmit, errors } = useForm();

  const [phoneData, setPhoneData] = useState('');

  return (
    <View style={styles.form}>
      <View style={styles.inputAddon_Container}>
        <View
          style={
            borderstyleBottomRadius
              ? customBorderBottomRadius.AddonIcon_Container_Custom
              : styles.AddonIcon_Container
          }
        >
          {phoneField ? (
            <PhoneInput
              placeholder='Enter Phone Number'
              value={phoneData}
              onChange={setPhoneData}
              style={styles.phoneCountry}
            />
          ) : (
            <FontAwesomeIcon
              style={styles.inputAddon_icon}
              icon={icon}
              size={22}
              color={color}
            />
          )}
        </View>

        <View style={styles.formGroup}>
          <TextInput
            style={
              borderstyleBottomRadius
                ? customBorderBottomRadius.input
                : styles.input
            }
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '97%',
    backgroundColor: '#fff',
    padding: 17,

    borderTopEndRadius: 10,
  },

  form: {
    width: '100%',
    display: 'flex',
  },

  formGroup: {
    width: '85%',
  },

  inputAddon_Container: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    marginHorizontal: 10,
    marginVertical: 1,
  },
  AddonIcon_Container: {
    backgroundColor: '#000',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.51,
    borderTopLeftRadius: 10,
  },
  phoneCountry: {
    width: 20,
  },
});

const customBorderBottomRadius = StyleSheet.create({
  input: {
    width: '97%',
    backgroundColor: '#fff',
    padding: 17,

    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 10,
  },

  AddonIcon_Container_Custom: {
    borderBottomLeftRadius: 10,
    // opacity: 0.51,
    backgroundColor: '#000',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomInput;
