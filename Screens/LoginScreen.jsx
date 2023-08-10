import React from 'react';
import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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
  Text,
  View,
  Platform,
  Button,
} from "react-native";


import BackgroundImage from '../images/photo-bg.jpg'

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    const handleEnter = useCallback(() => {
        console.log('Press Login not Ok')
        onRegistration()
    });

    const homeRoute = () => navigation.navigate("Home", {
        screen: 'PostScreen',
        params: {
            email: email,
        },
    })

    const handleSubmit = useCallback(() => {
        if (email && password) {
        Alert.alert(`Wellcome ${email}!`)
            console.log(`Login ${email}, password ${password}`)   
            homeRoute(email);
        }
        else {
               Alert.alert(`Type all necessary information for login!`)   
        }
        
        setEmail('')
        setPassword('')

    })

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, [])
    

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={styles.container}>
          
                    <ScrollView
                        keyboardDismissMode="interactive"
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                    >
                        <ImageBackground
                            source={BackgroundImage}
                            style={styles.image_bg}>
                            <SafeAreaView style={styles.inputContainer}>
                                <Text style={styles.title}>Увійти</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={setEmail}
                                    keyboardType='email-address'
                                    autoFocus={true}
                                    placeholder="Адреса електронної пошти"
                                    value={email}
                                />
                                <View>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setPassword}
                                        contextMenuHidden={true}
                                        value={password}
                                        placeholder="Пароль"
                                        secureTextEntry={true}
                                    />
                                    <Text style={[styles.textInput, styles.text]} onPress={() => console.log('Show password')}>Показати</Text>
                                </View>
            
                                <View style={[{ marginTop: 45 }, { borderRadius: 100 }, { overflow: 'hidden' }]}>
                                    <Button
                                        style={styles.btn}
                                        title='Увійти'
                                        onPress={handleSubmit}
                                        color='#FF6C00'
                                    />
                                </View>
                                <Text style={styles.text}
                                    onPress={() => navigation.navigate("Register")}
                                >Немає аккаунту? Зареєструватись
                                </Text>
                            </SafeAreaView>
                        </ImageBackground>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
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
        marginVertical: 32,
        color: "#212121",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
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

export default LoginScreen