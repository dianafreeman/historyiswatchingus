import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  CardWrapper,
  CardTop,
  CardBottom
} from '../styled';


storiesOf('Card', module).add('default', () => {
  return (
      <>
    <CardWrapper>
      <CardTop>Children</CardTop>
      <CardBottom>
        <h4>Label</h4>
      </CardBottom>
    </CardWrapper>
    </>
  );
});
