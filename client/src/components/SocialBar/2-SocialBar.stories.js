
import React from 'react';
import { storiesOf } from '@storybook/react';
import { CardWrapper } from '../styled'
import { action } from '@storybook/addon-actions';

import SocialBar from '.';

export const props = {
    website: 'http://degette.house.gov',
    twitter_id: 'RepDianaDeGette',
    youtube_url: 'https://youtube.com/RepDianaDeGette',
    facebook_id: 'DianaDeGette',
};

storiesOf('SocialBar', module)
  .add('default', () => <CardWrapper> <SocialBar  {...props}/> </CardWrapper>)
  .add('hovered', () => <CardWrapper  onMouseEnter={action('is hovered')}> <SocialBar  {...props}/> </CardWrapper>)
