import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button onPress = {() => navigation.navigate("Details") }title = "go to details screen"/>
      </View>
    )
  }

const styles = StyleSheet.create ({
    background: {
        flex: 1,
        justifyContent: "flex-end",

    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    }
});

export default HomeScreen;