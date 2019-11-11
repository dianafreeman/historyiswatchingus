import React from 'react';
import { CardWrapper, CardTop, CardBottom } from './index';

const CardDecorator = storyFn => <div style={{textAlign: 'center'}}>{storyFn()}</div>;

export default {
  title: 'Card',
  decorators: [CardDecorator],
  includeStories: ['onMount', 'onDestroy'],
};

export const onMount = () => (
  <CardWrapper>
    <CardTop>Children</CardTop>
    <CardBottom>
      <h4>Label</h4>
    </CardBottom>
  </CardWrapper>
);

export const onDestroy = () => (
  <CardWrapper>
    <CardTop>Children</CardTop>
    <CardBottom>
      <h4>Label</h4>
    </CardBottom>
  </CardWrapper>
);
