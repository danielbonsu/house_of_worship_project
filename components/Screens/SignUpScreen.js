import React, { Fragment, useState } from 'react';
import CustomButton from '../CustomButtons';
import CustomInput from '../Custom Components/CustomInput';

import { useForm, Controller } from 'react-hook-form';

import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  faHandPointDown,
  faUser,
  faKey,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { color } from 'react-native-reanimated';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const SignUpScreen = ({ navigation }) => {
  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate('Home', {});
  };

  const { control, handleSubmit, errors } = useForm();

  return (
    <Fragment>
      <ImageBackground
        source={require('../../images/churchWorship3.jpg')}
        style={styles.Main}
      >
        <View style={styles.overlay}></View>
        <Image
          style={styles.logo}
          source={require('../../images/houseOfWorshipLogo.png')}
        />

        <Text style={styles.headerText}>Join Us!</Text>
        <KeyboardAvoidingView
          behavior='position'
          keyboardVerticalOffset={40}
        >
          <Controller
            control={control}
            render={({ onBlur, onChange, value }) => (
              <CustomInput
                color='#fff'
                icon={faUser}
                placeholder='First Name'
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                // borderstyleBottomRadius={true}
                value={value}
              />
            )}
            name='first_name'
            defaultValue=''
          />

          <Controller
            control={control}
            render={({ onBlur, onChange, value }) => (
              <CustomInput
                color='#fff'
                icon={faUser}
                borderstyleBottomRadius={true}
                placeholder='Last Name'
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                // borderstyleBottomRadius={true}
                value={value}
              />
            )}
            name='last_name'
            defaultValue=''
          />

          <Controller
            control={control}
            render={({ onBlur, onChange, value }) => (
              <CustomInput
                color='#fff'
                icon={faPhone}
                borderstyleBottomRadius={true}
                placeholder='Phone'
                onBlur={onBlur}
                phoneField={false}
                onChangeText={(value) => onChange(value)}
                // borderstyleBottomRadius={true}
                value={value}
              />
            )}
            name='phone'
            defaultValue=''
          />

          <Controller
            control={control}
            render={({ onBlur, onChange, value }) => (
              <CustomInput
                color='#fff'
                icon={faEnvelope}
                borderstyleBottomRadius={true}
                placeholder='Email'
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                // borderstyleBottomRadius={true}
                value={value}
              />
            )}
            name='Email'
            defaultValue=''
          />

          <Controller
            control={control}
            render={({ onChange, value, onBlur }) => (
              <CustomInput
                color='#fff'
                icon={faKey}
                borderStyle='top'
                placeholder='New Password'
                onChangeText={(value) => onChange(value)}
                value={value}
                onBlur={onBlur}
                secureTextEntry={true}
                borderstyleBottomRadius={true}
              />
            )}
            name='NewPassword'
            defaultValue=''
          />

          <Controller
            control={control}
            render={({ onChange, value, onBlur }) => (
              <CustomInput
                color='#fff'
                icon={faKey}
                borderStyle='top'
                placeholder='Confirm New Password'
                onChangeText={(value) => onChange(value)}
                value={value}
                onBlur={onBlur}
                secureTextEntry={true}
                borderstyleBottomRadius={true}
              />
            )}
            name='ConfirmNewPassword'
            defaultValue=''
          />

          <View style={styles.Register}>
            <Button
              color='#fff'
              title='Register'
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    backgroundColor: '#01579b',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    opacity: 0.91,
  },

  submit: {
    backgroundColor: '#212121',
    width: '100%',
    padding: 5,
    margin: 5,
    borderRadius: 7,
  },

  Register: {
    backgroundColor: '#111',
    width: '95%',
    padding: 5,
    marginVertical: 5,
    borderRadius: 7,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  headerText: {
    fontSize: 50,
    marginVertical: 10,
    color: '#fff',
  },

  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'left',
    marginVertical: 10,
  },
  logo: {
    width: 200,
    height: 200,

    padding: 30,
    borderRadius: 100,
  },
});

export default SignUpScreen;
