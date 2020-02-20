import React, { useState, useCallback } from 'react';
import {
  View,
  Alert,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
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
      handlenewUser()
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

  const handlenewUser = () => {
    /* add a new user to the database */
    const usernameText = signInState.username
    const passwordText = signInState.password
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
    .catch(err => console.log({err: 'err in signup post fetch'}))
  }


  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.container}>

        <Image source={require('../assets/images/logo.png')} />
        <View>
          <Text>UserName</Text>
          <TextInput style={styles.input} onChangeText={text => setSignInState({ ...signInState, username: text })} placeholder="Please be at least 3 characters long"></TextInput>
        </View>
        <View>
          <Text>Password</Text>
          <TextInput secureTextEntry={true} style={styles.input} onChangeText={text => setSignInState({ ...signInState, password: text })} placeholder="password"></TextInput>
        </View>
        <View>
          <Text>Reenter Password</Text>
          <TextInput secureTextEntry={true} style={styles.input} onChangeText={text => setSignInState({ ...signInState, verifyPassword: text })} placeholder="password"></TextInput>
        </View>
        <View>
          <TouchableHighlight style={styles.buttonContainer} onPress={checkUsernameLength}><Text style={styles.buttonText} >Sign Up</Text></TouchableHighlight>
        </View>

      </View>
    </KeyboardAvoidingView >

  )
}

export default React.memo(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 420,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
    paddingTop: 95,
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
});