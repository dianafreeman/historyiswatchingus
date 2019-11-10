import styled from 'styled-components';
import tw from 'tailwind.macro';
import { colors } from '../../tailwind.config';

export const Content = styled.div`
  ${tw`px-2 my-3 mx-5`}
`;

export const ActionButton = styled.button`
  ${tw`p-5 flex w-full lg:w-1/2 rounded-lg bg-brand-deep-red border-brand-deep-red border-4 font-sans border-solid text-brand-white`}
`;

export const SelectWrapper = styled.div`
  ${tw`w-full m-auto`}
`;

export const LocationText = styled.p`
  ${tw`font-bold font-serif text-2xl m-auto`}
`;

export const ButtonIcon = styled.img`
  ${tw`h-auto`}
  width: 10vw;
  min-width: 100px;
  `