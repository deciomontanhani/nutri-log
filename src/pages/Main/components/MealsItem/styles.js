import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  height: 70;
  justify-content: center;
  background-color: #fff;
  margin-top: 5;
  margin-bottom: 5;
  margin-right: 5;
  margin-left: 5;
  padding-top: 10;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 10;
`;

export const Title = styled.Text`
  color: #333;
  font-size: 16;
`;

export const Description = styled.Text`
  color: #aaa;
  font-size: 13;
`;

export const IconContainer = styled.View`
  justify-content: center;
`;
