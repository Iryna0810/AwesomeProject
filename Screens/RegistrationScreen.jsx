import React from 'react';

import { useCallback } from 'react';
import {
  Alert,
  Button,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View
} from "react-native";
import BackgroundImage from '../images/photo-bg.jpg'

const RegistrationScreen = () => {
  const [login, onChangeText] = React.useState('Логін');
  const [email, onChangeEmail] = React.useState('Адреса електронної пошти');
  const [password, onChangePassword] = React.useState('Пароль');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        style={styles.image}>
        <SafeAreaView style={styles.inputContainer}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Логін"
            // value={login}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            // value={email}
            placeholder="Адреса електронної пошти"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            // value={password}
            placeholder="Пароль"
            keyboardType="text"
          />
          <Button style={styles.button}
            color='#FF6C00'
            title='Зареєструватися'
            onPress={() => Alert.alert('Left button pressed')}
            // width='343'
            padding='16'
            marginTop='43'         
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position:relative,
    flex: 1,
    height: 100,
    width: 375,
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
    marginTop: 92,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
    input: {
    height: 50,
    padding:16,
    margin: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 5,
      color: "#BDBDBD",
      backgroundColor: '#E8E8E8',
    
    
  },
  inputContainer: {
    flex: 1,
    padding: 16,
    marginTop: 263,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  button: {
   
    color: '#fff',
    paddingLeft: 111.5,
    paddingBottom: 16,
    paddingRight: 111.5,
    paddingTop: 16,
    borderRadius: 100,
  },
});


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

