import React from 'react';
import styled from 'styled-components';
import ActionCard from './Card/ActionCard';
import tw from 'tailwind.macro';
import SpringWrapper from './SpringWrapper';
import { colors } from '../tailwind.config';
import { FaUsers } from 'react-icons/fa';
import { p } from './Text';

const Wrapper = styled.div`
  ${tw`w-full flex flex-wrap`}
  height: inherit;
`;

const Actions = ({ store }) => {
  return (
    <>
      <ActionCard
        cardBottom={
          <p style={tw`text-2xl m-auto text-center`}>
            View your Legislators
          </p>
        }
        store={store}
        wrapperStyles={{ textAlign: 'center' }}
      >
        {' '}
        <FaUsers
          style={{
            fontSize: '6em',
            color: colors['brand-light-gray'],
            margin: 'auto',
          }}
        />
      </ActionCard>
      <ActionCard
        cardBottom={
          <p style={tw`text-2xl m-auto text-center`}>
            Choose the causes you care about
          </p>
        }
        store={store}
        wrapperStyles={{ textAlign: 'center' }}
      />
    </>
  );
};

export default Actions;
