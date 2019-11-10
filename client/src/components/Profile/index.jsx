import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Card from '../Card';
import { Subtitle } from '../Text';
import SocialBar from '../SocialBar';
import { colors } from '../../tailwind.config';

const PartyIndicator = styled.h4`
  ${tw`rounded-full px-2 py-1 ml-4 font-bold border-1 border-solid lg:text-2xl`}
  background-color: ${props =>
    props.party === 'D'
      ? colors['blue']
      : props.party === 'R'
      ? colors['red']
      : colors['purple']}
  color: ${colors['white']};
`;

const ProfilePhoto = styled.img`
  ${tw`rounded-full h-auto w-1/3 `}
  max-width: 130px;
`;


const ProfileCard = props => {
  const { BIO } = props;
  return (
    <Card
      cardTop={
        <>
          <Subtitle style={tw` m-0`}>{BIO.firstlast}</Subtitle>
          <PartyIndicator party={BIO.party}>{BIO.party}</PartyIndicator>
        </>
      }
      cardBody={
        <ProfilePhoto
          src={`https://theunitedstates.io/images/congress/225x275/${BIO.bioguide_id}.jpg`}
        />
      }
      cardBottom={
        <SocialBar
          facebook_id={BIO.facebook_id}
          twitter_id={BIO.twitter_id}
          youtube_url={BIO.youtube_url}
          website={BIO.website}
        />
      }
    />
  );
};

export default ProfileCard;
