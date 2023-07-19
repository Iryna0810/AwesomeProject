import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import {RegistrationScreen} from './Screens/RegistrationScreen';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';


export default function App() {
    const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });
  return (
    <View style={styles.container}>
      <RegistrationScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   image: {
    flex: 1,
    justifyContent: 'center',
  },
});
