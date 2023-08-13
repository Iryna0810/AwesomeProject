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
        {/* <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}> */}
          <ScrollView
            keyboardDismissMode="interactive"
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
          <ImageBackground
            
              // source={BackgroundImage}
            style={styles.image_bg}
          >
              <SafeAreaView style={styles.inputContainer}>
                <View style={styles.box}>
                  <Image
                    source={require('../assets/add.png')}
                    style={styles.image}
                  />
                </View>
                </SafeAreaView>
            </ImageBackground>
          </ScrollView>
        {/* </KeyboardAvoidingView> */}
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
    alignItems:'center',
  },
  image: {
    position: 'absolute',
    right: -12.5,
    bottom: 14,
    width: 25,
    height: 25,
  },
  text: {
    marginTop: 16,
    marginBottom: 45,
    textAlign: 'center',
    
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