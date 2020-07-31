import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import envs from 'envs';

const App = () => (
  <SafeAreaView>
    <View>
      <Text>IS_ANDROID: {envs.IS_ANDROID ? 'true' : 'false'}</Text>
      <Text>IS_IOS: {envs.IS_IOS ? 'true' : 'false'}</Text>
      <Text>APP_NAME: {envs.APP_NAME}</Text>
      <Text>APP_ENV: {envs.APP_ENV}</Text>
      <Text>API_HOST: {envs.API_HOST}</Text>
    </View>
  </SafeAreaView>
);

export default App;
