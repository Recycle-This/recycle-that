import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';


const LoginScreen = ({ navigation }) => {

  const [loginState, setLoginState] = useState({
    username: '',
    password: ''
  })

  const handleSignupPress = useCallback(() => {
    navigation.goBack()
    setTimeout(() => {
      navigation.navigate('Sign Up')
    }, 500)
  });

  const handleLogin = () => {
    if (loginState.username !== '' && loginState.password !== '') {
      alert('Successful Login')
      handleGetUserData()
    } else {
      alert('Please enter a username & password')
    }
  }

  const handleGetUserData = () => {
    /* get all a users data from database */
    fetch(`http://192.168.0.110:3000/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => console.log('fetch res', res))
    .catch(err => console.log({err: 'err in login get fetch'}))
  }

  return (
    <View>
      <Image source={require('../assets/images/logo.png')} />

      <TextInput onChangeText={text => setLoginState({ ...loginState, username: text })} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Username" />
      <TextInput onChangeText={text => setLoginState({ ...loginState, password: text })} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Password" />
      <View>
        <TouchableOpacity onPress={handleLogin} style={{ borderColor: 'gray', borderWidth: 1 }}><Text>Login</Text></TouchableOpacity>
      </View>
      <View>
        <Text>Forgot your login details?</Text><TouchableOpacity onPress={handleLogin} ><Text>Get help signing in.</Text></TouchableOpacity>
      </View>
      <View>
        <Text>Don't have an account?</Text><TouchableOpacity onPress={handleSignupPress} ><Text>Sign Up.</Text></TouchableOpacity>
      </View>
    </View >
  )
}

export default React.memo(LoginScreen);