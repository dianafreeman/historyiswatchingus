import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
};

export const text = () => <Button variant="red" onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
