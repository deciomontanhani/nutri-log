import React from 'react';
import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MealsActions from '~/store/ducks/meals';

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

  renderItem = ({ item }) => (
    <MealsItem title={item.title} time={item.time} feeling={item.feeling} />
  );

  render() {
    const { data } = this.props;
    return (
      <Container>
        <StatusBar backgroundColor="#D6E7E0" />
        <Title>Segunda-feira, 23 de Abril de 2019</Title>
        <Content>
          <SubTitle>Hoje você comeu:</SubTitle>
          <MealsList
            alwaysBounceVertical={false}
            data={data.meals}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
          />
        </Content>
        <ButtonWrapper onPress={() => null}>
          <ButtonText>Adicionar uma nova comida</ButtonText>
        </ButtonWrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.meals,
});

const mapDispatchToProps = dispatch => bindActionCreators(MealsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
