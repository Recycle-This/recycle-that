import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, TextInput, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <Text>Create UserName</Text>
      <TextInput style={styles.input} onChangeText={text => setSignInState({ ...signInState, username: text })} placeholder="Please be at least 3 characters long"></TextInput>
      <View>
        <Text>Password</Text>
        <TextInput style={styles.input} onChangeText={text => setSignInState({ ...signInState, password: text })} placeholder="password"></TextInput>
      </View>
      <View>
        <Text>Reenter Password</Text>
        <TextInput style={styles.input} onChangeText={text => setSignInState({ ...signInState, verifyPassword: text })} placeholder="password"></TextInput>
      </View>
      <View>
        <TouchableHighlight style={styles.buttonContainer} onPress={checkUsernameLength}><Text style={styles.buttonText} >Sign Up</Text></TouchableHighlight>
      </View>
    </View>

  )
}

export default React.memo(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 325,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
    paddingTop: 35,
  },
  input: {
    height: 40,
    backgroundColor: 'rgb(255, 255, 255)',
    marginBottom: 20,
    width: 200,
    paddingHorizontal: 10,
    color: 'black',
  },
  buttonContainer: {
    backgroundColor: '#1589FF',
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
});