import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { AuthContext } from '../contexts/AuthContext'


const LoginScreen = ({ navigation }) => {
  const { signIn } = useContext(AuthContext)

  const [loginState, setLoginState] = useState({
    username: '',
    password: ''
  })


  const handleLoginPress = async() => {
    if (loginState.password !== '' && loginState.username !== '') {
      const signInStatus = await signIn(signInState)
      if (signUpStatus){
        Alert.alert('Successful Signup')
      } else {
        Alert.alert('invalid authentication')
      }
    } 
  }

  const handleSignupPress = useCallback(() => {
    navigation.goBack()
    setTimeout(() => {
      navigation.navigate('Sign Up')
    }, 500)
  });



  return (
    <View>
      <Image source={require('../assets/images/logo.png')} />

      <TextInput onChangeText={text => setLoginState({ ...loginState, username: text })} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Username" />
      <TextInput onChangeText={text => setLoginState({ ...loginState, password: text })} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Password" />
      <View>
        <TouchableOpacity onPress={handleLoginPress} style={{ borderColor: 'gray', borderWidth: 1 }}><Text>Login</Text></TouchableOpacity>
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