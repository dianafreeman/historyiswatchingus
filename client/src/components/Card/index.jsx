import styled from 'styled-components'
import tw from 'tailwind.macro';
import { colors } from '../../tailwind.config'

export const CardWrapper = styled.div`
${tw`bg-theme-white font-sans hover:bg-theme-light-gray hover:shadow-lg rounded-lg m-5 relative text-center`}
svg {
  color: ${props =>
    props.isHovered
      ? colors['theme-dark']
      : colors['theme-light-gray']} !important;
}
`;

export const FixedCardContainer = styled.div`
${tw`bg-theme-light-gray fixed rounded-lg shadow`}
z-index: 88;
`;

export const FixedCardContent = styled.div`
${tw`relative`}
height: calc(100% - 2em);
width: inherit;
opacity: ${props => (props.isOpen ? 1 : 0)};
`;

export const CardTop = styled.div`
${tw`pin-t pt-5 relative min-h-3`}
`;

export const CardBottom = styled.div`
${tw`pin-b relative pb-5 w-full min-h-3`}
h4 {
  ${tw`font-hairline font-sans`}
}
`;

export const CardBody = styled.div`
${tw`h-400 w-full relative`}
`


export const CardClose = styled.button`
${tw`bg-theme-dark text-white hover:bg-theme-medium-gray hover:text-theme-dark absolute pin-t pin-r m-3 p-1`}
`;
