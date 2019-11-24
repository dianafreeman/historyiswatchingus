import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Profile from '../Profile'
import { BigTitle, Subtitle } from '../Text'


const Wrapper = styled.div`
  display: block;
`;


const Masthead = ({children}) => {
  return (
    <Wrapper>
      <BigTitle>Your Vote is Your Voice</BigTitle>
      <Subtitle> Speak Responsibly </Subtitle>
    </Wrapper>
  );
};

export default Masthead;