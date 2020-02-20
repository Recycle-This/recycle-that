import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet
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
    } else {
      alert('Please enter a username & password')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require('../assets/images/logo.png')} />
      </View>
      <TextInput onChangeText={text => setLoginState({ ...loginState, username: text })} style={styles.input}
        placeholder="Username" />
      <TextInput onChangeText={text => setLoginState({ ...loginState, password: text })} style={styles.input}
        placeholder="Password" />
      <View style={styles.buttonContainer} >
        <TouchableOpacity onPress={handleLogin}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
      </View>
      <View >
        <Text>Forgot your login details?</Text><TouchableOpacity onPress={handleLogin} ><Text style={{
          color: "blue", textAlign: 'center',
        }}>Get help signing in.</Text></TouchableOpacity>
      </View>
      <View>
        <Text>Don't have an account?</Text><TouchableOpacity onPress={handleSignupPress} ><Text style={{ color: "blue", textAlign: 'center' }}>Sign Up.</Text></TouchableOpacity>
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
    paddingTop: 95,
    paddingBottom: 270,
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
    marginBottom: 40
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
  image: {
    paddingBottom: 25,
    paddingTop: 40,
  }

});
