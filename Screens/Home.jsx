import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import CreatePostsScreen from './CreatePostsScreen';
import PostsScreen from './PostsScreen';
import ProfileScreen from './ProfileScreen';

const Home = () => {
const navigation = useNavigation();
// const { params: { email } } = useRoute();

  return (
    <View style={styles.container}>
    <Text>Home Screen</Text>
    </View>
  ) 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
