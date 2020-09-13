import React from 'react'
import {View, Text, Button} from 'react-native';

const SupportScreen = ({navigation}) => {
    return (
      <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>support Screen</Text>
        <Button onPress = {() => navigation.navigate("Details") }title = "go to details screen"/>
      </View>
    )
  }
  export default SupportScreen;