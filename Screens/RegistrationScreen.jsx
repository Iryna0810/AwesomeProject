import React from 'react';
import { useCallback } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { ImageBackground } from 'react-native-web';

export const RegistrationScreen = () => {
    //     const [fontsLoaded] = useFonts({
    //     'Inter-Black': require('../assets/fonts/inter-Black.otf'),
    //   });
    const [text, onChangeText] = React.useState('Useless Text');
    
    return (
        <View style={styles.container}>
             <ImageBackground source={require('../images/photo-bg.png')}
                resizeMode="cover"
        style={styles.image}>
         <Text>Open up App.js to start working on your app!</Text>
         <Text style={styles.text}>Hello world</Text>
                <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="useless placeholder"
        // keyboardType="numeric"
      />
            </ImageBackground>
        </View>
    )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    image: {
    flex: 1,
    justifyContent: 'center',
    },
     text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    },
    input: {
             color: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },
      
      
});
