import styled from 'styled-components';
import { colors } from '../../tailwind.config';
import tw from 'tailwind.macro';

export const CardWrapper = styled.div`
${tw`relative h-full flex border border-solid border-brand-light-gray rounded-lg w-1/3`}  
  background-color: ${props =>
    props.isHovered ? colors['brand-light-gray'] : colors['brand-white']};
}
z-index: 0;
`;

export const CardContent = styled.div`
  ${tw`p-3 w-full`}
`;

export const CardTop = styled.div`
  ${tw`flex text-center p-2`}
`;

export const CardBottom = styled.div`
  ${tw`flex text-left`}
  * {
    ${tw`font-hairline font-sans`}
  }
`;

export const CardBody = styled.div`
  ${tw`w-full`}
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

export const FlexWrapper = styled.div`
  ${tw`flex flex-wrap`}
`;
