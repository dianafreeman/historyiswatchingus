import React, { Component } from 'react';
import propTypes from 'prop-types';
// import ExpandingCard from './ExpandingCard'

import {
  CardContent,
  CardTop,
  CardBottom,
  CardWrapper,
  CardBody,
} from './styles';

class Card extends Component {

  render() {
    return (
          <CardWrapper
            style={this.props.wrapperStyles ? this.props.wrapperStyles : {}}
          >
            <CardContent>
              <CardTop>{this.props.cardTop}</CardTop>
              <CardBody>
                {this.props.cardBody}
                {this.props.children}
              </CardBody>
              <CardBottom>{this.props.cardBottom}</CardBottom>
            </CardContent>
          </CardWrapper>
    );
  }
}

Card.propTypes = {
  cardTop: propTypes.element,
  cardBody: propTypes.element,
};

Card.defaultProps = {};

export default Card;
