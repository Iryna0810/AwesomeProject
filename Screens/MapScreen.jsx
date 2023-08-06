import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/LoginScreen";
import Register from "../Screens/RegistrationScreen";
import Home from "../Screens/ProfileScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import CommentsScreen from "../Screens/CommentsScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MainStack = createNativeStackNavigator(); // вказує на групу навігаторів

export default MapScreen = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">{/* Аналог Routes */}
        <MainStack.Screen name="Register" component={Register} />{/* Аналог Route */}
        <MainStack.Screen name="Login" component={Login} />
              <MainStack.Screen
                  name="Home"
                  component={Home}
                  options={{ title: "Start screen" }}
              />
              <MainStack.Screen name="PostsScreen" component={CreatePostsScreen} />
              <MainStack.Screen name="Comments" component={CommentsScreen} />   
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
