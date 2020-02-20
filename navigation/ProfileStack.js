import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';

function LogoTitle() {
  return (
    <Image style={{ width: 160, height: 60 }} source={require('../assets/images/logo.png')} />
  );
}
const ProfileStack = createStackNavigator();

const ProfileScreenStack = ({ navigation, route }) => {

  return (
    <ProfileStack.Navigator initialRouteName={'Profile'} >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
    </ProfileStack.Navigator>
  );

};

export default ProfileScreenStack;
