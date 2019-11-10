import React, { Component } from 'react';
import ShakeWrapper from '../ShakeWrapper';
import propTypes from 'prop-types';
import {
  CardContent,
  CardTop,
  CardBottom,
  CardWrapper,
  CardBody,
} from './styles';

class Card extends Component {
  state = {
    isOpen: true,
    isHovered: false,
    isShaking: false,
  };

  onClick = () =>
    !!this.props.store.location
      ? this.setState(prevState => ({ isOpen: !prevState.isOpen }))
      : this.toggleShake();

  toggleShake = (bool = true) =>
    this.setState({ isShaking: bool }, () => this.timeoutShake());
  timeoutShake = (ms = 500) => setTimeout(() => this.toggleShake(false), ms);

  onMouseEnter = () => this.setState({ isHovered: true });
  onMouseLeave = () => this.setState({ isHovered: false });

  render() {
    return (
      <ShakeWrapper isShaking={this.state.isShaking}>
        <CardWrapper
          onClick={this.onClick}
          isOpen={this.state.isOpen}
          canOpen={this.state.canOpen}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          isHovered={this.state.isHovered}
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
      </ShakeWrapper>
    );
  }
}

Card.propTypes = {
  cardTop: propTypes.element,
  cardBody: propTypes.element,
};

Card.defaultProps = {};

export default Card;

/*
 <SpringWrapper>
            <FixedCardContainer
              ref={this.fixedElRef}
              style={{ height: this.state.isOpen ? 'unset' : 'inherit'}}
            >
              <FixedCardContent isOpen={this.state.isOpen}>
                <CardClose>X</CardClose>
                 {/* <div style={tw`flex flex-wrap`}>
                  {RESPONSE.reps.map(rep => (
                    <Profile key={rep.CID} BIO={rep} />
                  ))}
                </div>  
                </FixedCardContent>
                </FixedCardContainer>
              </SpringWrapper>

*/
