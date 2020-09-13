import React from 'react'
import {View, Text, Button} from 'react-native';

const SettingsScreen = ({navigation}) => {
    return (
      <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>settings Screen</Text>
        <Button onPress = {() => navigation.navigate("Details") }title = "go to details screen"/>
      </View>
    )
  }
  export default SettingsScreen;