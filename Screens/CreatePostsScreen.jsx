import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';
 import { nanoid } from "nanoid";


const CreatePosts = () => {
  const navigation = useNavigation();
  const [article, setArticles] = useState([]);

  const addArticles = (article) => {
    setArticles((list) => {
      return [article,
        ...list]
    })
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          image: "",
          name: '',
          location: '',
          key: nanoid(),

        }}
        onSubmit={values => {
          addArticles(values);
          resetForm();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput style={styles.textInput}
              onChangeText={handleChange('image')}
              onBlur={handleBlur('image')}
              placeholder="Завантажте зображення"
              value={values.image}
            />
            <TextInput style={styles.textInput}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              placeholder="Назва"
              value={values.name}
            />
            <TextInput style={styles.textInput}
              onChangeText={handleChange('location')}
              onBlur={handleBlur('location')}
              placeholder="Місцевість"
              value={values.location}
            />
            <Button style={styles.button}
              onPress={handleSubmit}
              title="Submit" />
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
    paddingHorizontal: 16,
  },
  textInput: {
    width: 343,
    color: '#BDBDBD',
    borderColor: '#E8E8E8',
    marginBottom: 16,
    borderBottomColor: '#E8E8E8',

  }
});

export default CreatePosts;