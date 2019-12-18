import styled from 'styled-components';
import tw from 'tailwind.macro';


export const BigTitle = styled.h1`
  ${tw`text-brand-dark font-heading font-black`};
  @media screen and (min-width: 798px){
    font-size: calc(100% + 2vw)
  }
`;

export const Subtitle = styled.h2`
  ${tw`text-brand-dark font-subheading font-thin`}
  @media screen and (min-width: 798px){
    font-size: calc(100% + 2vw)
  }

`;

export const MiniTitle = styled.h3`
  ${tw`text-brand-dark font-subheading font-thin`}
  @media screen and (min-width: 798px){
    font-size: calc(100% + 2vw)
  }
`;
