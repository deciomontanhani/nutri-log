import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import {
  Container, Content, Title, Description, IconContainer,
} from './styles';

const MealsItem = ({ time, title, feeling }) => (
  <Container>
    <Content>
      <Title>
        {time} - {title}
      </Title>
      <Description>{feeling}</Description>
    </Content>
    <IconContainer>
      <Icon name="chevron-right" color="#999" size={35} />
    </IconContainer>
  </Container>
);

MealsItem.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  feeling: PropTypes.string.isRequired,
};

export default MealsItem;
