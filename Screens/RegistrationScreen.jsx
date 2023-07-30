import React from 'react';
import { useCallback, useState } from 'react';
import {
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  SafeAreaView,
  ImageBackground,
  RefreshControl,
  StyleSheet,
  Image,
  Text,
  View,
  Platform,
  Button,
} from "react-native";

import BackgroundImage from '../images/photo-bg.jpg'


const RegistrationScreen = ({ onRegistration }) => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const handleEnter = useCallback(() => {
    console.log('Press Ok')
    onRegistration(true);
  });

  const handleSubmit = useCallback(() => {
    if (login&&email&&password) {
      Alert.alert(`Wellcome ${login}!`)
      console.log(`Wellcome ${login}, your email ${email}, your password ${password}`)
    }
    else {
      Alert.alert(`Type all necessary information for registration!`)
    }
    setLogin('')
    setEmail('')
    setPassword('')
  })

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing();
    }, 2000);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}>
          
          <ScrollView
            keyboardDismissMode="interactive"
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <ImageBackground
              source={BackgroundImage}
              style={styles.image_bg}>
              <SafeAreaView style={styles.inputContainer}>
                <View style={styles.box}>
                  <Image
                    source={require('../assets/add.png')}
                    style={styles.image}
                  />
                </View>
                <Text style={styles.title}>Реєстрація</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setLogin}
                  autoFocus={true}
                  placeholder="Логін"
                  value={login}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={setEmail}
                  
                  placeholder="Адреса електронної пошти"
                  value={email}
                />
                <View>
                  <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Пароль"
                    secureTextEntry={true}
                  />
                  <Text style={[styles.textInput, styles.text]} onPress={() => console.log('Show password')}>Показати</Text>
                </View>
            
                <View style={[{ marginTop: 45 }, { borderRadius: 100 }, { overflow: 'hidden' }]}>
                  <Button
                    style={styles.btn}
                    title='Зареєструватися'
                    onPress={handleSubmit}
                    color='#FF6C00'
                  />
                </View>
                <Text style={styles.text} onPress={handleEnter}>Вже є аккаунт? Увійти</Text>
              </SafeAreaView>
            </ImageBackground>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
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
  image_bg: {
    flex: 1,
  },
  image: {
    position: 'absolute',
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
  textInput: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 16,
    top: '8%',
  },
  btn: {
    color: '#000',
    marginTop: 45,
    borderStyle: 'solid',
    boederWidth: 2,
    borderRadius: 100,
    borderColor: 'blue',
  },
  box: {
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    position: 'absolute',
    alignSelf: 'center',
    top: -60,
    borderColor: '#000',
    borderRadius: 16,
  }
}
);

export default RegistrationScreen