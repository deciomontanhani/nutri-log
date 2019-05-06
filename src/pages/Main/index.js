import React from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  Content,
  Title,
  SubTitle,
  MealsList,
  ButtonWrapper,
  ButtonText,
} from './styles';
import MealsItem from './components/MealsItem';
import Meal from '~/models/Meal';

class Main extends React.Component {
  static navigationOptions = {
    title: 'Nutri Log',
  };

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

  renderItem = ({ item }) => <MealsItem {...item} />;

  render() {
    const { meals } = this.state;
    return (
      <Container>
        <StatusBar backgroundColor="#D6E7E0" />
        <Title>Segunda-feira, 23 de Abril de 2019</Title>
        <Content>
          <SubTitle>Hoje você comeu:</SubTitle>
          <MealsList
            alwaysBounceVertical={false}
            data={meals}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
          />
        </Content>
        <ButtonWrapper>
          <ButtonText>Adicionar uma nova comida</ButtonText>
        </ButtonWrapper>
      </Container>
    );
  }
}

export default Main;
