import React from 'react';

import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the Search Screen</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
