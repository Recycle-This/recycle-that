import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, TextInput } from 'react-native';

const SignUpScreen = (props) => {
  const [signInState, setSignInState] = useState({
    username: "",
    password: "",
    verifyPassword: ""
  })

  const checkUsernameLength = () => {
    if (signInState.username.length >= 3) {
      return verifyPassword();
    } else {
      Alert.alert('Character must be at least 3 characters long')
    }
  }

  const verifyPassword = () => {
    if (signInState.verifyPassword === signInState.password && signInState.password.length > 1) {
      Alert.alert('Successful Signup')
    } else {
      Alert.alert('Passwords do not match')
    }
  }
  return (
    <View>
      <Text>Create UserName</Text>
      <TextInput onChangeText={text => setSignInState({ ...signInState, username: text })} placeholder="Please be at least 3 characters long"></TextInput>
      <View>
        <Text>Password</Text>
        <TextInput onChangeText={text => setSignInState({ ...signInState, password: text })} placeholder="password"></TextInput>
      </View>
      <View>
        <Text>Reenter Password</Text>
        <TextInput onChangeText={text => setSignInState({ ...signInState, verifyPassword: text })} placeholder="password"></TextInput>
      </View>
      <View>
        <TouchableHighlight onPress={checkUsernameLength}><Text>Sign Up</Text></TouchableHighlight>
      </View>
    </View>

  )
}

export default React.memo(SignUpScreen);