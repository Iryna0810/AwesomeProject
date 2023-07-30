import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from 'react';
import { StyleSheet, View, Alert} from 'react-native';


export default function App() {
    const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Black.ttf'),
    });
  const [registration, setRegistration] = useState(false);
    
  return (
<NavigationContainer>
    <View style={styles.container}>

      { ! registration ? <RegistrationScreen onRegistration={() => {
        setRegistration(true)
       Alert.alert('Press Ok')
      }}/> 
      : <LoginScreen onRegistration={() => {
        setRegistration(false)
       Alert.alert('Press Ok')
      }}/>
       }
      <StatusBar style="auto" />
      </View>
      </NavigationContainer>
  )
}

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
