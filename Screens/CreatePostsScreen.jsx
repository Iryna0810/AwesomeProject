// Formik x React Native example

import React, { useState } from 'react';
import { View, TextInput, StyleSheet,Image, Button } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { EvilIcons } from '@expo/vector-icons';
import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
   image: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   location: Yup.string().required('Required'),
   key: Yup.string().required('Required'),
 });

const CreatePosts = props => {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);


  return (
    <View style={styles.container}>
     < Formik initialValues={{
        image: '',
        name: '',
        location: '',
        key: '1',
      }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          values.key = Math.random().toString(10);
          setArticles((list) => [values]);
          console.log(articles);
          resetForm();
    }
        }>
        
      {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.box}>
              <Image source={require('../images/photo.png')}
              style={styles.image_camera}
              />
            </View>
          <TextInput style={styles.imageInput}
            onChangeText={handleChange('image')}
            onBlur={handleBlur('image')}
            placeholder="Завантажте фото"
            value={values.image}
            marginBottom={32}
            />
            <TextInput style={styles.textInput}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            placeholder="Назва..."
            value={values.name}
            />
            <View>
              <View>
                <EvilIcons name="location" size={24} color="black" position="absolute" top={2} />
              </View>
                <TextInput style={styles.textInput}
                onChangeText={handleChange('location')}
                onBlur={handleBlur('location')}
                placeholder="       Місцевість..."
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  textInput: {
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
    width: 343,
    height: 240,
    position: 'relative',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 8,
  },
  image_camera: {
    width: 60,
    height: 60,
    },
  imageInput: {
    color: "#BDBDBD",
  },
  error: {
    color: 'red',
    
}
});

export default CreatePosts;