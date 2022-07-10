import React from 'react';
import {
  useColorScheme,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  Text,
} from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { authorize, refresh } from 'react-native-app-auth';

const config = {
  issuer:
    '<ISSUER>',
  clientId: '<B2C_CLIENT_ID>',
  redirectUrl: '<B2C_REDIRECT_URL>',
  scopes: ['openid', 'profile', 'offline_access', '<B2C_ClIENT_ID>'],
};

export const HomeSecond = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [refreshToken, setRefreshToken] = React.useState('');

  const login = () => {
    authorize(config)
      .then(result => {
        // result includes accessToken, accessTokenExpirationDate and refreshToken
        console.log('result: ', result);
        setRefreshToken(result.refreshToken);
      })
      .catch(err => {
        console.error(err);
      });
  };
  const refreshFun = () => {
    refresh(config, { refreshToken })
      .then(result => {
        // result includes accessToken, accessTokenExpirationDate and refreshToken
        console.log('refresh result: ', result);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>Home Second</Text>
          <Button title="Go to Home main" onPress={navigateToHome} />
          <Button title="Login" onPress={login} />
          <Button title="Refresh" onPress={refreshFun} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
