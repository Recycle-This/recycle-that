import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchStackScreen from './SearchStack';
import ProfileScreenStack from './ProfileStack';
import TabBarIcon from '../components/TabBarIcon';
import SignUpScreen from './../screens/SignUpScreen';
import LoginScreen from './../screens/LoginScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Search';

export default function BottomTabNavigator({ navigation, route }) {

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Search"
        component={SignUpScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreenStack}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
