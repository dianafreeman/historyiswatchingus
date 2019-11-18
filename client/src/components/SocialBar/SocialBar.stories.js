
import React from 'react';

import SocialBar from '.';

const props = {
    website: 'http://degette.house.gov',
    twitter_id: 'RepDianaDeGette',
    youtube_url: 'https://youtube.com/RepDianaDeGette',
    facebook_id: 'DianaDeGette',
};

export default  { title: 'Social Bar' };
export const normal = () =>  <SocialBar  {...props}/>
