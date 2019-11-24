import React from 'react';
import styled from 'styled-components';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Navbar from './components/Navbar';
import Masthead from './components/Masthead';
import Actions from './components/Actions';
import StateSelect, { ActionButton } from './components/StateSelect';
import { colors } from './tailwind.config';

const AppWrapper = styled.div`
  width: 100vw;
  z-index: 0;
  background-image: linear-gradient(#ffffff, #e8e8e8);
`;

const PageSection = styled(ParallaxLayer)``;

const Content = styled.div`
  
`;
class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        {/* <Navbar /> */}
        <Parallax pages={2}>
          <PageSection offset={0} speed={0.5}>
            <ParallaxLayer speed={0.2}>
              <Content>
                <Masthead />
                <StateSelect store={this.props.store} />
                <div style={{marginTop: '1em'}}>
                <ActionButton>
                  Another button
                </ActionButton>
                </div>
              </Content>
            </ParallaxLayer>
          </PageSection>

          <ParallaxLayer offset={1} speed={0.5}>
            <span onClick={() => this.parallax.scrollTo(1)}>
              <Actions store={this.props.store} />
            </span>
          </ParallaxLayer>
        </Parallax>
      </AppWrapper>
    );
  }
}
export default App;
