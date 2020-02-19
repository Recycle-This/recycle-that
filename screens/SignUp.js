import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

const SignUp = (props) => {
    const [signInState, setSignInState] = useState({
        username: "",
        password: "",
        verifyPassword: ""
    })

    const checkUsernameLength = () => {
        if (signInState.username.length >= 3) {
            return verifyPassword();
        } else {
            alert('Character must be at least 3 characters long')
        }
    }

    const verifyPassword = () => {
        if (signInState.verifyPassword === signInState.password && signInState.password.length > 1c) {
            alert('Successful Signup')
        } else {
            alert('Passwords do not match')
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
                <TouchableOpacity onPress={checkUsernameLength}><Text>Sign Up</Text></TouchableOpacity>
            </View>
        </View>

    )
}

export default React.memo(SignUp);