
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableHighlight, Button, Alert, Platform, StatusBar } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
const HomeScreen = ({navigation}) => {
  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress = {() => navigation.navigate("Details") }title = "go to details screen"/>
    </View>
  )
}
const DetailsScreen = ({navigation}) => {
  return (
  <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button onPress = {() => navigation.push("Details") }title = "go to details screen again"/>
        <Button onPress = {() => navigation.navigate("Home") }title = "go home"/>
        <Button onPress = {() => navigation.goBack() }title = "go back"/>
        <Button onPress = {() => navigation.popToTop() }title = "go first screen"/>
      </View>
  )
}
const Stack = createStackNavigator();
export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{
          headerStyle: {
            backgroundColor: "#009387",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: 'bold',
          }
      }}>
        <Stack.Screen name = "Home" component = {HomeScreen} options = {{
          
        }}/>
        <Stack.Screen name = "Details" component = {DetailsScreen}/>
        
      </Stack.Navigator>
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
