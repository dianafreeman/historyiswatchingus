import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import PageWrapper from '../src/components/PageWrapper';
import { withConsole } from '@storybook/addon-console';

const MinThemeDecorator = storyFn => <PageWrapper divider={false}>{storyFn()}</PageWrapper>

addDecorator(withA11y);
// addDecorator(withConsole);
addDecorator(MinThemeDecorator);

// automatically import all component files ending in *.stories.js
configure(
  require.context('../src/components/', true, /\.stories\.js$/),
  module
);
