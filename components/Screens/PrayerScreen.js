import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import React from 'react';

import { useForm, Controller } from 'react-hook-form';

import CustomBanner from '../../components/Custom Components/CustomBanner';
import {
  TextInput,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const PrayerScreen = () => {
  const onChange = {};
  const {
    control,
    register,
    handleSubmit,
    errors,
  } = useForm();
  return (
    <ImageBackground
      source={require('../../images/gradient1.jpg')}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={
          Platform.OS == 'ios' ? 'position' : 'padding'
        }
      >
        <ScrollView>
          <View style={styles.prayerAnnouncementCard}>
            <Text style={styles.announcementText}>
              Fasting for PEACE IN THE LAND Sunday November
              1st 6pm to Wednesday November 4th 6pm Fast
              from 6pm to 6am or 6am to 6pm
            </Text>
          </View>

          <View style={styles.prayerAnnouncementCard}>
            <Text style={styles.announcementText}>
              <View>
                <Text>PRAY WITH US!</Text>
              </View>
              <Text>
                Everyday for 15 minutes at 12AM, 3AM, 6AM,
                9AM 12PM, 3PM, 6PM, 9AM
              </Text>
            </Text>
          </View>
          <CustomBanner>
            <Text style={styles.customBannerText}>
              Call: (206) 402-0821 — Pin: 8464088#
            </Text>
          </CustomBanner>

          <View style={styles.prayerRequestContainer}>
            <View style={styles.prayerAnnouncementCard}>
              <Text style={styles.prayerRequestHeader}>
                PRAYER REQUESTS
              </Text>

              <View style={styles.name}>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  render={({ onChange, value, onBlur }) => (
                    <TextInput
                      placeholder='First Name'
                      onChangeText={(value) =>
                        onChange(value)
                      }
                      value={value}
                      onBlur={onBlur}
                      style={styles.requestInput}
                    />
                  )}
                  name='Email'
                  defaultValue=''
                />
              </View>
              <Controller
                rules={{ required: true }}
                control={control}
                render={({ onChange, value, onBlur }) => (
                  <TextInput
                    placeholder='Last Name'
                    onChangeText={(value) =>
                      onChange(value)
                    }
                    value={value}
                    onBlur={onBlur}
                    style={styles.requestInput}
                  />
                )}
                name='Email'
                defaultValue=''
              />

              <Controller
                rules={{ required: true }}
                control={control}
                render={({ onChange, value, onBlur }) => (
                  <TextInput
                    placeholder='Phone'
                    onChangeText={(value) =>
                      onChange(value)
                    }
                    value={value}
                    onBlur={onBlur}
                    style={styles.requestInput}
                  />
                )}
                name='Phone'
                defaultValue=''
              />

              <Controller
                rules={{ required: true }}
                control={control}
                render={({ onChange, value, onBlur }) => (
                  <TextInput
                    placeholder='Email'
                    onChangeText={(value) =>
                      onChange(value)
                    }
                    value={value}
                    onBlur={onBlur}
                    style={styles.requestInput}
                  />
                )}
                name='email'
                defaultValue=''
              />

              <Controller
                rules={{ required: true }}
                control={control}
                render={({ onChange, value, onBlur }) => (
                  <TextInput
                    placeholder='message'
                    onChangeText={(value) =>
                      onChange(value)
                    }
                    value={value}
                    multiline={true}
                    numberOfLines={4}
                    style={styles.message}
                  />
                )}
                name='Phone'
                defaultValue=''
              />

              <TouchableOpacity style={styles.submitBTN}>
                <Text style={styles.submitText}>
                  Send Request
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  prayerAnnouncementCard: {
    width: '100%',
    backgroundColor: '#fff',
    height: 'auto',
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
  },

  announcementText: {
    color: '#000',
    textAlign: 'center',
  },

  customBannerText: {
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  prayerRequestContainer: {
    width: '100%',
    marginTop: 10,
  },

  requestInput: {
    backgroundColor: '#eee',
    width: '100%',
    height: 50,
    padding: 10,
    marginBottom: 10,
  },

  message: {
    backgroundColor: '#eee',
    minWidth: '100%',
    maxWidth: '100%',

    height: 200,
    padding: 10,
  },
  name: {
    width: '100%',
    flexDirection: 'row',
  },

  prayerRequestHeader: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  submitBTN: {
    width: '100%',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
  },

  submitText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PrayerScreen;
