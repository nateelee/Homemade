
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableHighlight, Button, Alert, Platform, StatusBar } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './app/screens/MainTabScreen';
import {DrawerContent} from './app/screens/DrawerContent'
import SupportScreen from './app/screens/SupportScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import RootStackScreen from './app/screens/RootStackScreen';
const Drawer = createDrawerNavigator();

 export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen/>
      {/* <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}></DrawerContent>}initialRouteName = "Home">
        <Drawer.Screen name = "HomeDrawer" component = {MainTabScreen}/>
        <Drawer.Screen name = "SettingsScreen" component = {SettingsScreen}/>
        <Drawer.Screen name = "SupportScreen" component = {SupportScreen}/>
      </Drawer.Navigator> */}
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
  },
});
