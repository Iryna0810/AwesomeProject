import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';


const PostsScreen = () => {
  const navigation = useNavigation();
  const { params: { email } } = useRoute();
  const { params: { login } } = useRoute();


  return (
    <View style={styles.container}>
      {login && <Text> Login: {login}</Text>}
      <Text>Email: { email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "start",
    // justifyContent: "center",
    padding: 32,
    backgroundColor: '#FFFFFF',
    borderBottom: 'solid',
  },
});

export default PostsScreen;