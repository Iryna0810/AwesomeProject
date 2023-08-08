import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';


const PostsScreen = () => {
  const navigation = useNavigation();
  const { params: { email } } = useRoute();

  return (
    <View style={styles.container}>
      <Text>PostsScreen Screen</Text>
      <Text>Email: { email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FFFFFF',
    borderBottom: 'solid',
  },
});

export default PostsScreen;