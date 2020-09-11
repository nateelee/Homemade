
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableHighlight, Button, Alert, Platform, StatusBar } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './app/screens/MainTabScreen';
const Drawer = createDrawerNavigator();

 export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = "Home">
        <Drawer.Screen name = "Home" component = {MainTabScreen}/>
      </Drawer.Navigator>
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
