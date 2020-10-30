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

  const onSubmit = (data) => {
    // navigation.navigate('Home', {});
  };

  return (
    <Fragment>
      <ImageBackground
        source={require('../../images/churchWorship2.png')}
        style={styles.Main}
      >
        <View style={styles.overlay}></View>

        {console.log(errors)}
        <Image
          style={styles.logo}
          source={require('../../images/houseOfWorshipLogo.png')}
        />

        <Text style={styles.resetInfo}>
          A link will be sent to Email for password reset
        </Text>

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

        <View style={styles.buttonGroup}>
          <SubmitButton
            title='Reset'
            color='#fff'
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ImageBackground>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: 'flex-start',
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
    justifyContent: 'space-between',
  },

  resetInfo: {
    margin: 20,
    color: '#fff',
    fontSize: 18,
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
