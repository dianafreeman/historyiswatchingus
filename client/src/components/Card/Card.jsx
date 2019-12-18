import React, { Component } from 'react';
import propTypes from 'prop-types';

import {
  CardContent,
  CardTop as CardTopWrapper,
  CardBottom as CardBottomWrapper,
  CardWrapper,
  CardBody as CardBodyWrapper,
} from './styles';

const Card = ({ CardTop, CardBody, CardBottom, wrapperStyles, children }) => (
  <CardWrapper style={wrapperStyles || {}}>
    <CardContent>
      <CardTopWrapper>
        {CardTop && <CardTop />}
        </CardTopWrapper>
      <CardBodyWrapper>
       {CardBody && <CardBody />}
        {children}
      </CardBodyWrapper>
      <CardBottomWrapper>
        {CardBottom && <CardBottom />}
        </CardBottomWrapper>
    </CardContent>
  </CardWrapper>
);

export default Card;

Card.propTypes = {};

Card.defaultProps = {
  cardTop: propTypes.element,
  cardBody: propTypes.element,
};
