import styled from 'styled-components';
import tw from 'tailwind.macro';
import { colors, screens } from '../../tailwind.config';

export const Content = styled.div`
  ${tw`px-2 my-3 mx-5`}
`;

export const ActionButton = styled.button`
  ${tw`px-5 py-1 flex w-full md:w-1/2 lg:w-1/3 rounded-lg bg-brand-deep-red border-brand-deep-red border-4 font-sans border-solid text-brand-white`}
`;

export const SelectWrapper = styled.div`
  ${tw`w-full m-auto`}
`;

export const LocationText = styled.p`
  ${tw`font-bold font-serif m-auto`}
  font-size: 24px;
  @media screen and (min-width: ${screens.md}){
    font-size: calc(16px + 1vw);
  }
  `;

export const ButtonIcon = styled.img`
  ${tw`w-full h-auto`}
@media screen and (min-width: ${screens.md}){
  width: 90px;
  height: auto;
}
  `