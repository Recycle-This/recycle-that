import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';

const ProfileStack = createStackNavigator();

const ProfileScreenStack = ({ navigation, route }) => {

  return (
    <ProfileStack.Navigator initialRouteName={'Profile'} >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );

};

export default ProfileScreenStack;
