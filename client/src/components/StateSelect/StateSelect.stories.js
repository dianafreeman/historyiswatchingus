import React from 'react'
import { action } from '@storybook/addon-actions';
import { locationResponse } from '../../stub/locationRepsonse'

import StateSelect from './'

const store = { location : locationResponse }
export default { title: 'State Select' };

export const onLoad = () =>  <StateSelect onClick={action('I should show a location selection')} store={store}/>
export const onSelect = () =>  <StateSelect store={store} showSelect={true} />
export const withLocationSet = () =>  <StateSelect store={{...store, location: { value: 'IL', label: 'Illinois' }}} showSelect={true} isHovered={true} selectProps={[]}/>

