import React, { useState, useCallback, useContext } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';


const LoginScreen = ({ navigation }) => {
  const { signIn } = useContext(AuthContext)

  const [loginState, setLoginState] = useState({
    username: '',
    password: ''
  })


  const handleLoginPress = async () => {
    if (loginState.password !== '' && loginState.username !== '') {
      const signInStatus = await signIn(signInState)
      if (signUpStatus) {
        Alert.alert('Successful Signup')
      } else {
        Alert.alert('invalid authentication')
      }
    }
  }

  const handleSignupPress = useCallback(() => {
    setTimeout(() => {
      navigation.navigate('Sign Up')
    }, 500)
  });


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
      .catch(err => console.log({ err: 'err in login get fetch' }))
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />

      <TextInput style={styles.input} onChangeText={text => setLoginState({ ...loginState, username: text })}
        placeholder="Username" />
      <TextInput style={styles.input} onChangeText={text => setLoginState({ ...loginState, password: text })}
        placeholder="Password" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} ><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text>Forgot your login details?</Text><TouchableOpacity onPress={handleLogin} ><Text style={{ color: "#23A75B", textAlign: 'center' }}>Get help signing in.</Text></TouchableOpacity>
      </View>
      <View>
        <Text>Don't have an account?</Text><TouchableOpacity onPress={handleSignupPress} ><Text style={{ color: "#23A75B", textAlign: 'center' }}>Sign Up.</Text></TouchableOpacity>
      </View>
    </View >
  )
}

export default React.memo(LoginScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 420,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
    paddingTop: 125,
    paddingBottom: 180,
  },
  input: {
    height: 40,
    backgroundColor: 'rgb(255, 255, 255)',
    marginBottom: 20,
    width: 200,
    paddingHorizontal: 10,
    color: 'black',
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    backgroundColor: '#23A75B',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    width: 175
  },
  addText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  text: {
    marginTop: 25,
  }
});