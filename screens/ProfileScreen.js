import React from 'react';

import { SafeAreaView, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the Profile Screen</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
