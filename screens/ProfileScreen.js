import React from 'react';

import { SafeAreaView, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the Profile Scrfeen</Text>
      <View>
        <TouchableHighlight
          style={styles.navBtn}
          onPress={() => navigation.navigate('Details')}
        >
          <Text>Navigate to Details</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
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
