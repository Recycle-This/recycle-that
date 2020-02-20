import React from 'react';

import { SafeAreaView, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the Search Screen</Text>
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

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  navBtn: {
    flex: 1,
    height: 5,
    justifyContent: 'center',
    backgroundColor: 'yellow'
  }
});
