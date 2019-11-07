
import React from 'react';
import { CardWrapper } from '../Card'
import { action } from '@storybook/addon-actions';

import {BigTitle,
    Subtitle,
    MiniTitle,
    ResponsiveA,
    ResponsiveP } from '.';

const props = {
    website: 'http://degette.house.gov',
    twitter_id: 'RepDianaDeGette',
    youtube_url: 'https://youtube.com/RepDianaDeGette',
    facebook_id: 'DianaDeGette',
};

export default  { title: 'Headings and Text' };
export const headingOne = () => <BigTitle>A Big Title</BigTitle>
export const headingSub = () => <Subtitle> A Subtitle</Subtitle>
