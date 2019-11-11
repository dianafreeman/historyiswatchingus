import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Navbar from './components/Navbar';
import Masthead from './components/Masthead';
import Actions from './components/Actions';
import StateSelect from './components/StateSelect';
import { colors } from './tailwind.config';

const AppWrapper = styled.div`
  ${tw`top-0 h-screen relative`}
  background-image: linear-gradient( #ffffff, #e8e8e8 );
  z-index: 0;
  &:after {
    content: ' ';
    position: absolute;
    background-color: ${colors['brand-white']};
    height: 30vh;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }
`;

const Section = styled.div`
  ${tw`py-2 text-serif`}
`;

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Navbar />
        <Section>
          <Masthead />
          <StateSelect store={this.props.store} />
        </Section>
        <Section style={tw`absolute pin-b`}>
          <Actions store={this.props.store} />
        </Section>
      </AppWrapper>
    );
  }
}
export default App;
