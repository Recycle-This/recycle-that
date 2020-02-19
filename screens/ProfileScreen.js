import React from 'react';

import { SafeAreaView, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the ProfileScreen</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
