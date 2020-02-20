import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [signInState, setSignInState] = useState({
    username: "",
    password: "",
    verifyPassword: ""
  })

  const handleLoginPress = useCallback(() => {
    navigation.goBack()
    setTimeout(() => {
      navigation.navigate('Login')
    }, 500)
  });

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

  const handleInputs = () => {
    /* add a new user to the database */
    const usernameText = loginState.username
    const passwordText = loginState.password
    //needs to increment when users click brownie/"i recycled" button
    const brownieCounter = 0

    fetch('http://192.168.0.110:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        username: usernameText,
        password: passwordText,
        brownie_points: brownieCounter
        })
    })
    .then(res => res.json())
    .then(res => console.log('fetch res', res))
    .catch(err => console.log({err: 'err in fetch'}))
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