import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen'

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
