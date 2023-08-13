import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import Login from "./LoginScreen";
import Register from "./RegistrationScreen";
import HomeTab from "./HomeTab";
import CreatePosts from "./CreatePostsScreen";


const MainStack = createStackNavigator()   

export const navigationRef = createNavigationContainerRef()

export const MapScreen = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator initialRouteName="Login"
      screenOptions= { {headerShown : false,} }>
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Register" component={Register} />
        <MainStack.Screen name="Home"
          component={HomeTab}
          // options={{
          //   title: "Home screen",
          //   headerStyle: {
          //     backgroundColor: "#f4511e",
          //   },
          //   headerTintColor: "#fff",
          //   headerTitleStyle: {
          //     fontWeight: "bold",
          //     fontSize: 20,
          //   },
          //   headerRight: () => (
          //     <Button
          //       onPress={() => alert("This is a button!")}
          //       title="Press me"
          //       color="#000"
          //     />
          //   ),
          // }}
        />
      <MainStack.Screen name="CreatePosts" component={CreatePosts} />

      </MainStack.Navigator>
    </NavigationContainer>
  );
};


export default MapScreen