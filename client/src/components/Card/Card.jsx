import React, { Component } from 'react';
import propTypes from 'prop-types';

import {
  CardContent,
  CardTop,
  CardBottom,
  CardWrapper,
  CardBody,
} from './styles';

class Card extends Component {
  static propTypes = {}
  static defaultProps = {
    cardTop: propTypes.element,
    cardBody: propTypes.element,
  }

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

export default Card;
