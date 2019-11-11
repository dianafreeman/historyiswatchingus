import React from 'react';
import styled from 'styled-components';
import Card from './Card/';
import tw from 'tailwind.macro';
import SpringWrapper from './SpringWrapper'
import { colors } from '../tailwind.config';
import { FaUsers } from 'react-icons/fa';
import { MiniTitle } from './Text'

const Wrapper = styled.div`
  ${tw`w-full flex`}
`;

//  const FixedCardContainer = styled.div`
// ${tw`bg-brand-light-gray fixed rounded-lg shadow`}
// z-index: 88;
// `;

//  const FixedCardContent = styled.div`
// ${tw`relative`}
// height: calc(100% - 2em);
// width: inherit;
// opacity: ${props => (props.isOpen ? 1 : 0)};
// `;

const Actions = ({ store }) => {
  return (
    <Wrapper>
      <Card
        cardBottom={<MiniTitle style={tw`text-2xl m-auto text-center`}>View your Legislators</MiniTitle>}
        store={store}
        wrapperStyles={{textAlign: 'center'}}
      >
        {' '}
        <FaUsers
          style={{
            fontSize: '6em',
            color: colors['brand-light-gray'],
            margin: 'auto',
          }}
        />
      </Card>
      <Card  cardBottom={<MiniTitle style={tw`text-2xl m-auto text-center`}>Choose the causes you care about</MiniTitle>}
        store={store}
        wrapperStyles={{textAlign: 'center'}} />
    </Wrapper>
  );
};

export default Actions;
