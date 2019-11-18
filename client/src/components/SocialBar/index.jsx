import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { FaFacebookF, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa';
import { colors } from '../../tailwind.config';
import { BIO } from '../../stub/repBio';

const Wrapper = styled.div`
  ${tw`flex justify-between px-6 py-2 mt-3`}
`;

const IconWrap = styled.a`
  ${tw`rounded-full mx-1 flex text-brand-dark px-1 border border-solid text-brand-dark border-brand-dark`}
  &:hover, &:active, &:focus {
    background: ${colors['brand-dark']};
    svg {
      fill: white;
    }
  }
  svg { 
      ${tw`mx-2 my-3`}
      fill: ${colors['brand-dark']} 
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
  const { facebook_id, twitter_id, youtube_url, website } = props;
  return (
    <Wrapper>
      {facebook_id && (
        <IconWrap
          href={`https://facebook.com/${facebook_id}`}
          rel="noopener"
          title={`Follow ${BIO.firstlast} on Facebook`}
        >
          <FaFacebookF />
        </IconWrap>
      )}
      {twitter_id && (
        <IconWrap
          href={`https://twitter.com/${twitter_id}`}
          rel="noopener"
          title={`Follow ${BIO.firstlast} on Twitter`}
        >
          <FaTwitter />
        </IconWrap>
      )}
      {youtube_url && (
        <IconWrap
          href={youtube_url}
          rel="noopener"
          title={`Subscribe to ${BIO.firstlast} on on YouTube`}
        >
          <FaYoutube />
        </IconWrap>
      )}
      {website && (
        <IconWrap
          href={website}
          rel="noopener"
          title={`Visit the website of ${BIO.firstlast}`}
        >
          <FaGlobe />
        </IconWrap>
      )}
    </Wrapper>
  );
};

export default SocialBar;
