import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen'

function LogoTitle() {
  return (
    <Image source={require('../assets/images/logo.png')} />
  );
}
const ProfileStack = createStackNavigator();
const LoginStack = createStackNavigator()

const ProfileScreenStack = ({ navigation, route }) => {
  // conditional will be here and return stack if async is found else return other stack

  // return (
  //   <ProfileStack.Navigator initialRouteName={'Profile'} >
  //     <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  //   </ProfileStack.Navigator>
  // );
  return (
    <LoginStack.Navigator initialRouteName={'Login'} >
      <LoginStack.Screen name='Login' component={LoginScreen} />
    </LoginStack.Navigator>
  )

};

export default ProfileScreenStack;

