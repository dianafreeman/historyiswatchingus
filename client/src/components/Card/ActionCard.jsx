import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import ExpandingCard from './ExpandingCard'

import {
  CardContent,
  CardTop,
  CardBottom,
  CardWrapper,
  CardBody,
} from './styles';

const ShakeableWrapper = styled(CardWrapper)`
${props => props.isShaking && `
  animation: shake 1s;
  animation-iteration-count: infinite;

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}`}
`


class ActionCard extends Component {
  state = {
    isOpen: false,
    isHovered: false,
    isShaking: false, 
    rect: {},
  };

  onClick = e => {
    !!this.props.store.location
      ? this.setState(prevState => ({ isOpen: !prevState.isOpen }))
      : this.toggleShake();
    // this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    this.props.onClick && this.props.onClick(e);
  };

  onCloseClick = e => this.setState({isOpen: false})

  toggleShake = (bool = true) =>
    this.setState({ isShaking: bool }, () => this.timeoutShake());

  timeoutShake = (ms = 500) => setTimeout(() => this.toggleShake(false), ms);
  onMouseEnter = () => this.setState({ isHovered: true });
  onMouseLeave = () => this.setState({ isHovered: false });

  render() {
    return (
      <>
          <ShakeableWrapper
            isShaking={this.state.isShaking}
            ref={this.cardRef}
            onClick={this.onClick}
            isOpen={this.state.isOpen}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            isHovered={this.state.isHovered}
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
          </ShakeableWrapper>
          <ExpandingCard onClose={this.onCloseClick} isOpen={this.state.isOpen}/>
          </>
    );
  }
}

ActionCard.propTypes = {
  cardTop: propTypes.element,
  cardBody: propTypes.element,
};

ActionCard.defaultProps = {};

export default ActionCard;
