import React from 'react';
import { Card } from '.';


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
 