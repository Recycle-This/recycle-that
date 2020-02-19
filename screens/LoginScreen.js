import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = (props) => {

    const [loginState, setLoginState] = useState({
        username: '',
        password: ''
    })

    const handleLogin = () => {
        if (loginState.username !== '' && loginState.password !== '') {
            alert('Successful Login')
        } else {
            alert('Please enter a username & password')
        }
    }

    return (
        <View>
            <Image source={require('../assets/images/logo.png')} />

            <TextInput onChangeText={text => setLoginState({ ...loginState, username: text })} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Username" />
            <TextInput onChangeText={text => setLoginState({ ...loginState, password: text })} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Password" />
            <View>
                <TouchableOpacity onPress = {handleLogin} style={{ borderColor: 'gray', borderWidth: 1 }}><Text>Login</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default React.memo(LoginScreen);