import React from 'react';
import styled from 'styled-components';
import ExpandingCard from './ExpandingCard';
import tw from 'tailwind.macro';
import { colors } from '../tailwind.config';
import { FaUsers } from 'react-icons/fa'
const Wrapper = styled.div`
  display: flex;
`;

const Actions = () => {
  return (
    <Wrapper>
     
      <ExpandingCard label="View your Legislators" > <FaUsers style={{ fontSize: '6em', color: colors['theme-light-gray'], margin: 'auto' }} /></ExpandingCard>
      <ExpandingCard label="Select the Causes that matter to you" />
      <ExpandingCard label="See how your legislators line up" />
     
    </Wrapper>
  );
};

export default Actions;
