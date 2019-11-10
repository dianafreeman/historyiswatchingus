import React from 'react';
import {BIO} from '../../stub/repBio';
import {default as Profile} from './index';

export default { title: 'Profile Card' };

export const basic = () => {
  const store = { location: { state: 'IL' } };
  return (<Profile BIO={BIO} store={store} >some sturfff </Profile>);
};
