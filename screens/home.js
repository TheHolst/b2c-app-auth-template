import React from 'react';
import {
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
} from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

export const Home = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const navigateToSecond = () => {
    navigation.navigate('HomeSecond');
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
          <Text>Home</Text>
          <Button title="Go to second home" onPress={navigateToSecond} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};