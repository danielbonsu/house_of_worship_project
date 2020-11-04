import React, {
  Fragment,
  useState,
  useEffect,
} from 'react';
import CustomButton from '../CustomButtons';
import CustomInput from '../Custom Components/CustomInput';
import CustomAlert from '../Custom Components/CustomAlert';
import SubmitButton from '../Custom Components/CustomButtons/SubmitButton';
import { useForm, Controller } from 'react-hook-form';

import {
  faHandPointDown,
  faUser,
  faKey,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { color } from 'react-native-reanimated';

const LoginScreen = ({ navigation }) => {
  const [showAlert, setShowAlert] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    errors,
  } = useForm();

  const [validateEmail, setValidateEmail] = useState({
    showAlert: '',
    message: '',
  });
  const onSubmit = (data) => {
    // validate  email
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = emailRegex.test(data.Email);
    navigation.replace('Home');
    if (!emailTest) {
      setValidateEmail({
        ...validateEmail,
        showAlert: true,
        message: 'email is not in the right format',
      });
      console.log(data);
    } else {
    }
  };

  return (
    <Fragment>
      <ImageBackground
        source={require('../../images/churchWorship2.png')}
        style={styles.Main}
      >
        <View style={styles.overlay}></View>
        <KeyboardAvoidingView
          behavior={
            Platform.OS == 'ios' ? 'position' : 'padding'
          }
        >
          <Image
            style={styles.logo}
            source={require('../../images/houseOfWorshipLogo.png')}
          />

          <Controller
            rules={{ required: true }}
            control={control}
            render={({ onChange, value, onBlur }) => (
              <CustomInput
                color='#fff'
                icon={faEnvelope}
                borderStyle='top'
                placeholder='Email'
                onChangeText={(value) => onChange(value)}
                value={value}
                onBlur={onBlur}
              />
            )}
            name='Email'
            defaultValue=''
          />
          {errors.UserName && (
            <CustomAlert
              errorMsg={`${errors.UserName.ref.name} field is required`}
            />
          )}

          <Controller
            rules={{ required: true }}
            control={control}
            render={({ onChange, value, onBlur }) => (
              <CustomInput
                color='#fff'
                icon={faKey}
                borderStyle='top'
                placeholder='Password'
                onChangeText={(value) => onChange(value)}
                value={value}
                onBlur={onBlur}
                secureTextEntry={true}
                borderstyleBottomRadius={true}
              />
            )}
            name='Password'
            defaultValue=''
          />
          {errors.Password && (
            <CustomAlert
              errorMsg={`${errors.Password.ref.name} field is required`}
            />
          )}

          <View style={styles.forgotPassword}>
            <TouchableNativeFeedback
              onPress={() =>
                navigation.navigate('ForgotPassword')
              }
            >
              <Text style={styles.text}>
                forgotPassword?
              </Text>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.buttonGroup}>
            <SubmitButton
              title='Login'
              color='#fff'
              onPress={handleSubmit(onSubmit)}
            />

            <SubmitButton
              title='Create An Account'
              color='#fff'
              btnSecondary={true} // set this for secondary btn color of ocean blue
              onPress={() => {
                navigation.navigate('Sign-Up', {});
              }}
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
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(70, 70, 93)',

    height: 1000,
  },

  submit: {
    backgroundColor: '#4fc3f7',
    width: '95%',
    padding: 5,
    marginVertical: 10,
    borderRadius: 10,
  },

  guest: {
    backgroundColor: '#000',
    width: '95%',
    padding: 5,
    borderRadius: 10,
  },
  buttonGroup: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  forgotPassword: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 12,
  },
  input: {
    width: 380,
    backgroundColor: 'rgb(127, 126, 151)',
    padding: 13,
    marginVertical: 5,
    zIndex: 55,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'left',
    marginVertical: 10,
  },
  logo: {
    marginTop: 120,
    width: 200,
    height: 200,
    marginLeft: 120,
    padding: 30,
    borderRadius: 100,
  },

  overlay: {
    backgroundColor: '#01579b',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    opacity: 0.6,
  },
});

export default LoginScreen;
