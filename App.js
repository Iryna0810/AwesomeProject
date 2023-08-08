import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import React from 'react';
import { View, StyleSheet } from "react-native";
import MapScreen from './Screens/MapScreen';
// import { navigationRef } from './Screens/MapScreen';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Black.ttf'),
  });
    
  return (
        // <View style={styles.container}>
        < MapScreen />
        // <StatusBar style="auto" />
        // </View >
  )
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    fontSize: 16,
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
