import React from 'react'
import {View, Text, Button} from 'react-native';

const ProfileScreen = ({navigation}) => {
    return (
      <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
        <Button onPress = {() => navigation.navigate("Details") }title = "go to details screen"/>
      </View>
    )
  }
  export default ProfileScreen;