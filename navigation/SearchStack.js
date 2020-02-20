import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen';

const SearchStack = createStackNavigator();

const SearchStackScreen = ({ navigation, route }) => {

  return (
    <SearchStack.Navigator initialRouteName={'Search'} headerTitle={'truyeee'}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Details" component={DetailsScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
