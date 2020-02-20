import React from 'react';

import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the Details Screen</Text>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
