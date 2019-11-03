import React, { useState } from 'react';
import { colors } from '../tailwind.config';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const CardWrapper = styled.div`
  ${tw`bg-theme-white hover:bg-theme-light-gray hover:shadow-lg rounded-lg m-5 text-2xl relative text-center`}
  height: 40vh;
  width: 33%;
  svg {
    color: ${props =>
      props.isHover
        ? colors['theme-dark']
        : colors['theme-light-gray']} !important;
  }
`;


const FixedCard = styled.div`
  ${tw`bg-theme-light-gray fixed rounded-lg shadow float-right`}
  left: 1em;
  top: 1em;
  right: 1em;
  bottom: 1em;
  z-index: 88;
`;


const CardClose = styled.button`
  ${tw`bg-theme-dark text-white hover:bg-theme-medium-gray hover:text-theme-dark absolute pin-t pin-r m-3 p-1`}
`;

const FixedCardContent = styled.div`
  ${tw`p-6 relative`}
  height: calc(100% - 2em);
  width: inherit;
`;

const CardTop = styled.div`
  ${tw` top-0 py-5 left-0 w-full`}
`;

const CardBottom = styled.div`
  ${tw`pin-b bottom-0 left-0 w-2/3 m-auto text-2xl`}
  h4 {
    ${tw`font-hairline font-sans`}
  }
`;

const ExpandingCard = props => {
  const [isOpen, setOpen] = useState(false);
  const [isHover, setHover] = useState(false);

  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  return (
    <>
      <CardWrapper
        onClick={() => setOpen(!isOpen)}
        isOpen={isOpen}
        isHover={isHover}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <CardTop>{props.children}</CardTop>
        <CardBottom>
          <h4>{props.label}</h4>
        </CardBottom>
        {isOpen && (
          <FixedCard>
            <FixedCardContent>
              <CardClose onClick={() => setOpen(!isOpen)}>X</CardClose>
              THIS IS A FIXED CARD
            </FixedCardContent>
          </FixedCard>
        )}
      </CardWrapper>
    </>
  );
};

export default ExpandingCard;
