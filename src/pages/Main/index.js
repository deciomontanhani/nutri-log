import React from 'react';
import {
  Text, StyleSheet, View, StatusBar, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Meal from '~/models/Meal';

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

class Main extends React.Component {
  state = {
    meals: [
      new Meal(1, '08:25h', 'Lanche Integral', 'Feliz e saciado'),
      new Meal(2, '12:30h', 'Almoço Executivo', 'Ansioso e levemente saciado'),
      new Meal(3, '14:00h', 'Frutas com Iogurte', 'Contente, com fome'),
    ],
  };

  navigationOptions = {
    title: 'Nutri Log',
  };

  keyExtractor = (item, index) => String(item.id);

  renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View
        style={{
          flex: 1,
          height: 70,
          justifyContent: 'center',
          backgroundColor: '#fff',
          margin: 5,
          padding: 10,
        }}
      >
        <Text style={{ color: '#333', fontSize: 16 }}>
          {item.time} - {item.title}
        </Text>
        <Text style={{ color: '#AAA', fontSize: 12 }}>{item.feeling}</Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Icon name="chevron-right" color="#999" size={22} />
      </View>
    </View>
  );

  render() {
    const { meals } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <StatusBar backgroundColor="#D6E7E0" />
          <Text style={styles.dateLabel}>Segunda-feira, 23 de Abril de 2019</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Hoje você comeu:</Text>
          <FlatList data={meals} keyExtractor={this.keyExtractor} renderItem={this.renderItem} />
        </View>
      </View>
    );
  }
}

export default Main;
