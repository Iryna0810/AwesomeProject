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
import { Feather, Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import PostsScreen from './PostsScreen';
import Logout from '../images/log-out.svg';


const HomeTab = createBottomTabNavigator()

export default function Home() {

  const navigation = useNavigation();

  return (   
    <HomeTab.Navigator
    initialRouteName='PostScreen'
    style={styles.container}  
     screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'PostScreen') {
            iconName = focused
              ? 'grid-outline'
              : 'ios-grid-outline'
          } 
         
          else if (route.name === 'CreatePosts')
          {
            iconName = focused ? 'add-circle' : 'ios-add-circle';
            // headerShown = false;
          }
           else if( route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          return <Ionicons name={iconName} size={40} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
       tabBarInactiveTintColor: 'gray',
       tabBarLabelStyle: {
       display: 'none',
}      })}
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
              <MaterialIcons 
                name="logout"
                size={24}
                color="#BDBDBD"
                marginRight = {10}              
                onPress={() =>
                navigation.navigate('Login')}
              />
            ),
          }}
          />
      <HomeTab.Screen name="CreatePosts" component={CreatePostsScreen}
        options={{
          title: "Cтворити публікацію",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
            
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerLeft: () => (
              <MaterialIcons 
                name="arrow-back"
                size={24}
                color="#212121"
                marginLeft = {10}              
                onPress={() => navigation.navigate("Profile")}
              />
            ),
        }}
      />
      <HomeTab.Screen name="Profile" component={Profile}
      options = { {headerShown : false,} }
      />
      {/* <HomeTab.Screen name="Comments" component={CommentsScreen} /> */}
    </HomeTab.Navigator>

  )
  
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    fontSize: 16,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});