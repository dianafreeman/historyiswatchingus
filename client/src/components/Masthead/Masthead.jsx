import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { BigTitle, Subtitle } from '../Text'


const Wrapper = styled.div`
  display: block;
`;

const DividingLine = styled.br`
 ${tw`border-lg border-solid border-2`}
` 

const Masthead = ({children}) => {
  return (
    <Wrapper>
      <BigTitle>Your Vote is Your Voice</BigTitle>
      <DividingLine />
      <Subtitle> Speak Responsibly </Subtitle>
    </Wrapper>
  );
};

export default Masthead;