import styled from 'styled-components';
import { colors } from '../../tailwind.config';
import tw from 'tailwind.macro';

export const CardWrapper = styled.div`
  ${tw`relative flex border border-solid border-brand-light-gray rounded-lg m-2 p-2 md:w-1/2 lg:w-1/3`}
  min-width: 200px;
  background-color: ${props =>
    props.isHovered
      ? colors['brand-light-gray']
      : colors['brand-white']};
}
`;

export const CardContent = styled.div`
  ${tw`w-full relative`}
`


export const CardTop = styled.div`
${tw`flex text-center justify-between p-2`}
`;

export const CardBottom = styled.div`
${tw`flex text-left`}
* {
  ${tw`font-hairline font-sans`}
}
`;

export const CardBody = styled.div`
width: inherit;

`;

export const CardClose = styled.button`
${tw`bg-brand-dark text-white hover:bg-brand-medium-gray hover:text-brand-dark absolute pin-t pin-r m-3 p-1`}
`;



export const FixedCardContainer = styled.div`
${tw`bg-brand-light-gray fixed rounded-lg shadow`}
z-index: 88;
`;

export const FixedCardContent = styled.div`
${tw`relative`}
height: calc(100% - 2em);
width: inherit;
opacity: ${props => (props.isOpen ? 1 : 0)};
`;