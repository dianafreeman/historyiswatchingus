import React from 'react';
import { addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { locationResponse } from '../../stub/locationRepsonse';
import { StateSelect } from './';


const store = { location: locationResponse };

/** STORY */
export default { title: 'State Select' };

export const onOpen = () => (
  <StateSelect
    onClick={action('I should show a location selection')}
    store={store}
    // selectProps={{menuIsOpen: true}}
  />
);
export const onSelect = () => <StateSelect store={store}  />;

export const withLocationSet = () => (
  <StateSelect
    store={{
      ...store,
      location: { value: 'IL', label: 'Illinois', ...locationResponse },
    }}
    selectProps={[]}
  />
);
