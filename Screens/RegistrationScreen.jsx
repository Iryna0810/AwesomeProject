import React from 'react';
import { useCallback } from 'react';
// import { Text, View, StyleSheet, TextInput } from 'react-native';
import { ImageBackground, Platform, StyleSheet, Text, View } from "react-native";
// import { ImageBackground } from 'react-native-web';
import BackgroundImage from '../images/photo-bg.jpg'

const RegistrationScreen = () => (
  // const [text, onChangeText] = React.useState('Useless Text');

  <View style={styles.container}>
    <ImageBackground
      source={BackgroundImage}
      style={styles.image}>
      <Text style={styles.title}>Реєстрація</Text>
    </ImageBackground>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#fff'
    ...Platform.select({
      ios: {
        backgroundColor: '#000000'
      },
      android: {
        backgroundColor: '#fff'
      },
    }
     )
  },
  title: {
    marginTop: 16, 
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
   image: {
    flex: 1,
     justifyContent: 'center',
     resizeMode: "fill",
    objectFit: 'fill',
    // width: '100vw',
    // height:'100vh',
  }
})

export default RegistrationScreen;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     },
//     image: {
//     flex: 1,
//     justifyContent: 'center',
//     },
//      text: {
//     color: 'white',
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
//     },
//     input: {
//     color: 'white',
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     },      

