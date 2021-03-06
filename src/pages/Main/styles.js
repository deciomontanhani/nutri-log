import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-left: 20;
  padding-right: 20;
  padding-top: 20;
  padding-bottom: 20;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 30;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 20;
  font-size: 18;
  margin-left: 20;
`;

export const SubTitle = styled.Text`
  color: #979797;
  margin-left: 20;
  font-size: 18;
`;

export const MealsList = styled.FlatList.attrs({})`
  margin-top: 20;
  margin-bottom: 20;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  height: 40;
  background-color: #3ec28f;
  justify-content: center;
  align-items: center;
  margin-bottom: 10;
  border-radius: 5;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
