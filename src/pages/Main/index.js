import React from 'react';

import {
  Text, StyleSheet, View, StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
  },
  contentTitle: {
    color: '#979797',
    marginLeft: 20,
    fontSize: 18,
  },
  dateLabel: {
    marginTop: 20,
    fontSize: 18,
    marginLeft: 20,
  },
});

const Main = () => (
  <View style={styles.container}>
    <View>
      <StatusBar backgroundColor="#D6E7E0" />
      <Text style={styles.dateLabel}>Segunda-feira, 23 de Abril de 2019</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.contentTitle}>Hoje você comeu:</Text>
    </View>
  </View>
);

Main.navigationOptions = {
  title: 'Nutri Log',
};

export default Main;
