import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';


const CreatePosts = () => {
const navigation = useNavigation();
// const { params: { email } } = useRoute();


  return (
    <View style={styles.container}>
      <Text>Публікації</Text>
      <Text>Email </Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreatePosts;