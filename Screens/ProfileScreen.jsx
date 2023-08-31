import React from "react";
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



const Profile = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);


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
                {/* <Text style={styles.title}>Реєстрація</Text> */}
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
    inputContainer: {
        flex: 1,
        marginTop: 263,  
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 16,
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
    // background-position: 'top',
  },
  image: {
    position: 'absolute',
    right: -12.5,
    bottom: 14,
    width: 25,
    height: 25,
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
    borderWidth: 2,
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

export default Profile;