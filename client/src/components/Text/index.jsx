import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';


export const BigTitle = styled.h1`
  ${tw`text-theme-dark font-sans font-black text-left`}
  @media screen and (min-width: 768px){
    font-size: 2.5em
  }
`;

export const Subtitle = styled.h2`
  ${tw`text-theme-dark font-sans font-bold `}
  @media screen and (min-width: 768px){
    font-size: 2.0em
  }
`;

export const MiniTitle = styled.h3`
  ${tw`text-theme-dark font-sans font-thin text-right`}
  @media screen and (min-width: 768px){
    font-size: 2.5em
  }
`;
