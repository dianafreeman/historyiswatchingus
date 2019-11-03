import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`relative p-4`}
`;

const BigTitle = styled.h1`
  ${tw`text-theme-dark font-sans font-black text-left`}
`;

const Subtitle = styled.h2`
  ${tw`text-theme-dark font-sans font-hairline`}
`;

const MiniTitle = styled.h3`
  ${tw`text-theme-dark font-serif font-hairline text-right`}
`;

const DividingLine = styled.hr`
  ${tw`border-bottom border-1 border-solid border-theme-white`}
`


const Masthead = () => {
  return (
    <Wrapper>
      <BigTitle>Your Vote is Your Voice</BigTitle>
      <Subtitle> Speak Responsibly </Subtitle>
      <DividingLine />
      <MiniTitle>History is Watching Us</MiniTitle>
    </Wrapper>
  );
};

export default Masthead;