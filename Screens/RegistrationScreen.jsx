import React from 'react';

import { useCallback } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Button,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
  Keyboard,
} from "react-native";
import BackgroundImage from '../images/photo-bg.jpg'

const RegistrationScreen = () => {
  const [login, setLogin] = React.useState('Логін');
  const [email, setEmail] = React.useState('Адреса електронної пошти');
  const [password, setPassword] = React.useState('Пароль');

  return (
     <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


        
      <ImageBackground
        source={BackgroundImage}
        style={styles.image}>
        <SafeAreaView style={styles.inputContainer}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            onChangeText={login => setLogin(login)}
                placeholder="Логін"

            // value={login}
          />
          <TextInput
            style={styles.input}
            onChangeText={email => setEmail(email)}
            // value={email}
                placeholder="Адреса електронної пошти"

          />
          <TextInput
            style={styles.input}
            onChangeText={password => setPassword(password)}
            // value={password}
            placeholder="Пароль"

          />
          <View style={styles.btn}>
          <Button
            title='Зареєструватися'
            onPress={() => Alert.alert('Left button pressed')}
            color='#FF6C00'
            />
            </View>
        </SafeAreaView>
          </ImageBackground>

         </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: 375,
    paddingHorizontal:16,
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
    fontWeight: "bold",
    marginBottom: 32,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
    input: {
    height: 50,
    padding:16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 5,
    color: "#BDBDBD",
    backgroundColor: '#E8E8E8',
  },
  inputContainer: {
    flex: 1,
    marginTop: 263,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  btn: {
    color: '#000',
    marginTop: 45,
    borderRadius:30,
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

