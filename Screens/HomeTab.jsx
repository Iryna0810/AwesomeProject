import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "./CreatePostsScreen";
import { Button, View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import CommentsScreen from "./CommentsScreen";
import Profile from "./ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from './PostsScreen';
import Logout from '../images/log-out.svg';


const HomeTab = createBottomTabNavigator()

export default function Home() {
    const navigation = useNavigation();
    

  return(
    <HomeTab.Navigator initialRouteName='PostScreen'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'PostScreen') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'CreatePosts' || route.name === 'Comments' || route.name === 'Profile') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        // headerShown: false,
      })}
      >
          <HomeTab.Screen name="PostScreen" component={PostsScreen}
          options={{
              title: "Публікації",
              headerTitleAlign:  "center",
              headerStyle: {
              backgroundColor: "#FFFFFF",
              },
            
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            headerRight: () => (
              <Button
                    onPress={() =>
                        navigation.popToTop()}
                    title=''
                    headerBackImageSource={Logout}
                    // width= '130'
                    
                backgroundColor='#000'
                // color="#fff"
              />
            ),
          }}
          />
      <HomeTab.Screen name="Profile" component={Profile} />
      <HomeTab.Screen name="CreatePosts" component={CreatePostsScreen} />
      <HomeTab.Screen name="Comments" component={CommentsScreen} />
    </HomeTab.Navigator>
)
};