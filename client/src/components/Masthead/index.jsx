import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Profile from '../Profile'
import { BigTitle, Subtitle, DividingLine } from '../styled'
import { BIO } from '../../stub/repBio'
const Wrapper = styled.div`
  ${tw`relative p-4`}
`;

const Masthead = () => {
  return (
    <Wrapper>
      <BigTitle>Your Vote is Your Voice</BigTitle>
      <Subtitle> Speak Responsibly </Subtitle>
      <DividingLine />
      <div style={{display: 'flex'}} >
      <Profile BIO={BIO}/>
      </div>
    </Wrapper>
  );
};

export default Masthead;