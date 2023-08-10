// Formik x React Native example

import React, { useState } from 'react';
import { View, TextInput, StyleSheet,TextLabel, Button } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';
import { EvilIcons } from '@expo/vector-icons';
// import { nanoid } from 'nanoid';


const CreatePosts = props => {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);


  return (
    <View style={styles.container}>
     < Formik initialValues={{
        image: '',
        name: '',
        location: '',
      }}

          onSubmit={values => {
          setArticles((list) => [...list, values]);
          console.log(articles);
          
          
    }
        }>
        
      {({ handleChange, handleBlur, handleSubmit, values, resetForm }) => (
        <View>
          <TextInput style={styles.imageInput}
            onChangeText={handleChange('image')}
            onBlur={handleBlur('image')}
            placeholder="Завантажте зображення"
              value={values.image}
              height={240}
              clearButtonMode='while-editing'
            />
            <TextInput style={styles.textInput}
              clearButtonMode='always'
              onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            placeholder="Назва..."
            value={values.name}
            />
            <View>
              <EvilIcons name="location" size={24} color="black" position="absolute" top={2} />
            <TextInput style={styles.textInput}
            onChangeText={handleChange('location')}
            onBlur={handleBlur('location')}
            placeholder='         Місцевість...'
            value={values.location}
              />
              
              </View>
            <View style={[
              { marginTop: 32 },
              { borderRadius: 100 },
              { overflow: 'hidden' },
            ]}
            >
              <Button style={styles.button}
                color='#FF6C00'
                onPress={handleSubmit}
                title="Опублікувати" />
              </View>
        </View>
      )}
    </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 343,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff"
  },
  textInput: {

    // tintColor: "#BDBDBD",
    color: '#BDBDBD',
    borderBottomWidth: 1,
    marginBottom: 16,
    borderBottomColor: '#E8E8E8',
  },
  button: {
    marginTop: 32,
    marginBottom:32,
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
  },
  imageInput: {
    height: 240,
    color: "#F6F6F6",
  },

});

export default CreatePosts;