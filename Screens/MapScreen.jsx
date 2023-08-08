import React from "react";
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./LoginScreen";
import Register from "./RegistrationScreen";
import Home from "./Home";
import CreatePostsScreen from "./CreatePostsScreen";
import CommentsScreen from "./CommentsScreen";
import Profile from "./ProfileScreen";
// import { createStackNavigator } from '@react-navigation/native-stack';
// import { createNavigationContainerRef } from '@react-navigation/native';


const MainStack = createStackNavigator(); // вказує на групу навігаторів

export const navigationRef = createNavigationContainerRef()

// export function navigate(name, params) {
//   if (navigationRef.isReady()) {
//     navigationRef.navigate(name, params);
//   }
// }



const MapScreen = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator initialRouteName="Login">{/* Аналог Routes */}
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Register" component={Register} />{/* Аналог Route */}
        <MainStack.Screen name="Home"
          component={Home}
          options={{ title: "Start screen" }}
              />
        <MainStack.Screen name="PostsScreen" component={CreatePostsScreen} />
        <MainStack.Screen name="Comments" component={CommentsScreen} />   
        <MainStack.Screen name="Profile" component={Profile} />   

      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MapScreen