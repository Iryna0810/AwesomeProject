import React from 'react';
import { useCallback } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  TextInput,
  SafeAreaView,
  ImageBackground,
  RefreshControl,
  StyleSheet,
  Image,
  Text,
  View,
  Keyboard,
} from "react-native";

import BackgroundImage from '../images/photo-bg.jpg'

const RegistrationScreen = () => {
  const [login, setLogin] = React.useState('Логін');
  const [email, setEmail] = React.useState('Адреса електронної пошти');
  const [password, setPassword] = React.useState('Пароль');

   const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
     <KeyboardAvoidingView
      style={styles.container}>  
      <ScrollView keyboardDismissMode="interactive"
      refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
      <ImageBackground
        source={BackgroundImage}
        style={styles.image_bg}>
          <SafeAreaView style={styles.inputContainer}>
            <View style={styles.box}>
              <Image
                source={require('../assets/add.png')}
                // styles={{ width: 25, height: 25 }}
                style={styles.image}
              />
            </View>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            onChangeText={setLogin}
            placeholder="Логін"
            value={login}
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Адреса електронної пошти"
            value={email}
              
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Пароль"
              // value='Пароль'
              
          />
          <View style={styles.btn}>
          <Button
            title='Зареєструватися'
            onPress={() => Alert.alert('Left button pressed')}
            color='#FF6C00'
            />
            </View>
            <Text style={styles.text} onPress={()=> console.log('Enter in account')}>Вже є аккаунт? Увійти</Text>
        </SafeAreaView>
        </ImageBackground>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: 375,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 92,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 32,
  },
  image_bg:  {
flex: 1,
  },
  image: {
    position:'absolute',
    right: -12.5,
    bottom: 14,
    width: 25,
    height: 25,
  },
  input: {
    height: 50,
    padding: 16,
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
  text: {
    marginTop: 16,
    marginBottom: 45,
    textAlign: 'center',
    
  },
  btn: {
    color: '#000',
    marginTop: 45,
    borderRadius: 30,
  },
  box: {
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    position: 'absolute',
    // alignItems: 'center',
    alignSelf: 'center',
    top: -60,
    borderColor: '#000',
    borderRadius: 16,
  }
}
);


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

