import React from 'react';

import {
  Text, StyleSheet, Dimensions, View, StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    fontSize: 14,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <View
    style={styles.container}
  >
    <Text style={styles.welcome}>NutriLog</Text>
  </View>
);

export default Main;
