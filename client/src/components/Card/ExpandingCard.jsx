import React, { Component } from 'react';
import { CardWrapper, CardTop, CardBottom, FixedCardContainer, FixedCardContent, CardClose } from '.'
import { Spring } from 'react-spring/renderprops';
import { Subtitle, MiniTitle } from '../Text'
import tw from 'tailwind.macro'
import RESPONSE from '../../stub/locationRepsonse'
import styled from 'styled-components'
import Profile from '../Profile'
const ShakeCardWrapper = styled(CardWrapper)`
width: 33%;
${props => props.isShaking && `
  /* Start the shake animation and make the animation last for 0.5 seconds */
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
}`};
`
class ExpandingCard extends Component {
  state = {
    isOpen: true,
    isHovered: false,
    isShaking: false,
    rect: null,
  };

  constructor(props) {
    super(props);
    this.fixedElRef = React.createRef();
  }

  onClick = (e) => {
    console.log(e.target.parentElement)
    // console.log(Object.keys(e.target))
    // if(this.props.store.location) { 
    // this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    // } else {
    //   this.setShake();
    //   setTimeout(() => {
    //     this.setShake()
    //   }, 500)
    // }
  }

  setShake = () => this.setState(prevState => ({ isShaking: !prevState.isShaking }) );

  onMouseEnter = () => this.setState({ isHovered: true });
  onMouseLeave = () => this.setState({ isHovered: false });

  render() {
    const { isOpen } = this.state;

    return (
        <ShakeCardWrapper
          onClick={this.onClick}
          isOpen={isOpen}
          canOpen={this.state.canOpen}
          isShaking={this.state.isShaking}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <CardTop>{this.props.children}</CardTop>
          <CardBottom>
            <MiniTitle style={{textAlign: 'center'}}>{this.props.label}</MiniTitle>
          </CardBottom>
          <Spring
            from={{
              left: 1,
              bottom: 1,
              right: 999,
              top: 999,
            }}
            to={{
              left: 1,
              bottom: 1,
              right: isOpen ? 1 : 999,
              top: isOpen ? 1 : 999,

            }}
          >
            {props => (
              <FixedCardContainer
                ref={this.fixedElRef}
                style={{ height: isOpen ? 'unset' : 'inherit', ...props }}
              >
                <FixedCardContent isOpen={isOpen}>
                  <CardClose>X</CardClose>
                  <div style={tw`flex flex-wrap`} >
                  {RESPONSE.reps.map(rep => <Profile key={rep.CID} BIO={rep}/>)}</div>
                </FixedCardContent>
              </FixedCardContainer>
            )}
          </Spring>
        </ShakeCardWrapper>
    );
  }
}

export default ExpandingCard;
