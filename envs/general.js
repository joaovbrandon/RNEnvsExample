import {Platform} from 'react-native';

export default {
  APP_NAME: 'This is just a React Native with envs example',
  IS_ANDROID: Platform.OS === 'android',
  IS_IOS: Platform.OS === 'ios',
};
