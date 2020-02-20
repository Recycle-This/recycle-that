import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen';

const SearchStack = createStackNavigator();
function LogoTitle() {
  return (
    <Image style={{ width: 160, height: 60 }} source={require('../assets/images/logo.png')} />
  );
}
const SearchStackScreen = ({ navigation, route }) => {

  return (
    <SearchStack.Navigator initialRouteName={'Search'} headerTitle={'Recycle'}>
      <SearchStack.Screen name="Recycle That" component={SearchScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
      <SearchStack.Screen name="Details" component={DetailsScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
