import React from 'react';
import styled from 'styled-components';
import Card from './Card/';
import tw from 'tailwind.macro';
import { colors } from '../tailwind.config';
import { FaUsers } from 'react-icons/fa';

const Wrapper = styled.div`
  ${tw`flex`}
`;

const Actions = ({ store }) => {
  return (
    <Wrapper>
      <Card
        label="View your Legislators"
        store={store}
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
      {/* <Card label="Select the Causes that matter to you" />
      <Card label="See how your legislators line up" /> */}
    </Wrapper>
  );
};

export default Actions;
