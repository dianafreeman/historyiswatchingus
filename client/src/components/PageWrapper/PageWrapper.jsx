import React from 'react';
import path from 'path';
import dotenv from 'dotenv';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Divider from '../Divider'
import GlobalStyle from '../../config/tailwind/GlobalStyle';

dotenv.config();

const Wrapper = styled.div`
  ${tw`font-sans-serif h-full`}
`;
const PageWrapContainer = styled.div`
  ${tw`relative h-full`}
`;

const Content = styled.div`
  display:block;
  min-height: 300px;
`

const PageWrapper = ({ children, divider = { variant :  "cool" , xPos : "left" , yPos:  "bottom" } , ...rest }) => {
  return (
    <Wrapper {...rest}>
      <GlobalStyle />
      <PageWrapContainer>
        {divider && <Divider config={divider}/>}
        <Content>
        {children}
        </Content>
      </PageWrapContainer>
    </Wrapper>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageWrapper;
