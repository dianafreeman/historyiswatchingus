import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { FaFacebookF, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa';
import { colors } from '../../tailwind.config';

const Wrapper = styled.div`
  ${tw`flex justify-between px-6 py-2 mt-3`}
`;

const IconWrap = styled.a`
  ${tw`rounded-full mx-1 relative inline-flex text-theme-dark px-1 w-200 h-200 border bg-solid border-solid text-theme-dark border-theme-dark`}
  svg { 
      ${tw`px-2 py-3 inline-flex`}
      fill: ${colors['theme-dark']} 
  }
  `;

/*

POSSIBLE OPTIONS: 

website
twitter_id
youtube_url
facebook_id
  
  */
const SocialBar = props => {
  return (
    <Wrapper>
      {props.facebook_id && (
        <IconWrap href="#" target="_blank" rel="noopener">
          <FaFacebookF />
        </IconWrap> 
      )}
      {props.twitter_id && (
        <IconWrap href="#" target="_blank" rel="noopener">
          <FaTwitter />
        </IconWrap>
      )}
      {props.youtube_url && (
        <IconWrap href="#" target="_blank" rel="noopener">
          <FaYoutube />
        </IconWrap>
      )}
      {props.website && (
        <IconWrap href="#" target="_blank" rel="noopener">
          <FaGlobe />
        </IconWrap>
      )}
    </Wrapper>
  );
};

export default SocialBar;
