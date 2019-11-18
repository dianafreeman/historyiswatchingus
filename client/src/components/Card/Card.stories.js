import React from 'react';
import Card from '.';

// const CardDecorator = storyFn => <div style={{width: '100%', display: 'block'}}>{storyFn}</div>;

export default {
  title: 'Card',
  // decorators: [CardDecorator],
};

export const onMount = () => (
  <Card
    cardTitle={`This is a card title`}
    footerText={`this is a card footer`}
  />
);
 