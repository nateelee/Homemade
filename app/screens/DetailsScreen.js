import {View, Text, Button} from 'react-native';
import React from 'react';
const DetailsScreen = ({navigation}) => {
    return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Details Screen</Text>
          <Button onPress = {() => navigation.push("Details") }title = "go to details screen again"/>
          <Button onPress = {() => navigation.navigate("Home") }title = "go home"/>
          <Button onPress = {() => navigation.goBack() }title = "go back"/>
    </View>
    )
  }
  export default DetailsScreen;