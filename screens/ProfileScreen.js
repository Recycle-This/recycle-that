import React from 'react';

import { SafeAreaView, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {

  return (
    <View>
      <Text style={{ textAlign: 'center' }}>This is Profile Screen</Text>
    </View>

  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  navBtn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'yellow'
  }
});
