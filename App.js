import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Mapper from './components/Mapper';
import Listings from './components/Listings';
import CheckIn from './components/CheckIn';
import ShareStore from './components/ShareStore';


const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const HuntStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} options={{ title: "Profile"}} />
    <AuthStack.Screen name="SignUp" component={SignUp} options={{ title: "Sign Up"}} />
  </AuthStack.Navigator>
);

const HuntStackScreen = () => (
  <HuntStack.Navigator>
    <HuntStack.Screen name="Listings" component={Listings} options={{ title: "The Hunt"}} />
    <HuntStack.Screen name="CheckIn" component={CheckIn} options={{ title: "Check In"}} />
    <HuntStack.Screen name="ShareStore" component={ShareStore} options={{ title: "Share this Store"}} />
  </HuntStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Map') {
              iconName = focused ? 'location' : 'location-pin';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'info-with-circle' : 'info';
            } else if (route.name === 'The Hunt') {
              iconName = focused ? 'image-inverted' : 'image';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tabs.Screen name="Profile" component={AuthStackScreen} />
        <Tabs.Screen name="Map" component={Mapper} />
        <Tabs.Screen name="The Hunt" component={HuntStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  },
  map:{
    flex: 8
  },
  menu_buttons:{
    flexDirection: 'column',
    height: '100%',
    flex: 1,
    marginLeft: 15,
    resizeMode: 'contain'
  },
  footer:{
    flexDirection:'row',
    height: 55,
    flex: 1
  }
});
