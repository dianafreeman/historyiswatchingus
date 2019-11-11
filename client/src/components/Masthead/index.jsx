import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Profile from '../Profile'
import { BigTitle, Subtitle} from '../Text'
const Wrapper = styled.div`
  ${tw`relative p-4`}
`;


const DividingLine = styled.hr`
  ${tw`border-bottom border-1 border-solid border-brand-white`}
`


const Masthead = () => {
  return (
    <Wrapper>
      <BigTitle>Your Vote is Your Voice</BigTitle>
      <Subtitle> Speak Responsibly </Subtitle>
      <DividingLine />
     
    </Wrapper>
  );
};

export default Masthead;