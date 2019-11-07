import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {
  CardWrapper,
  CardBody,
  CardTop,
  CardBottom,
} from '../Card';
import { Subtitle } from '../Text'
import SocialBar from '../SocialBar';
import { colors } from '../../tailwind.config';
/*

{"cid":"N00006134","firstlast":"Diana DeGette","lastname":"DEGETTE","party":"D","office":"CO01","gender":"F","first_elected":"1996","exit_code":"0","comments":"","phone":"202-225-4431","fax":"202-225-5657","website":"http://degette.house.gov","webform":"https://degette.house.gov/contact/send-me-an-email/email-me","congress_office":"2111 Rayburn House Office Building","bioguide_id":"D000197","votesmart_id":"561","feccandid":"H6CO01141","twitter_id":"RepDianaDeGette","youtube_url":"https://youtube.com/RepDianaDeGette","facebook_id":"DianaDeGette","birthdate":"1957-07-29"}


SECTOR {"cid":"N00006134","timestamp":"2019-11-05T02:26:44.172Z","sectors":{"@attributes":{"cand_name":"Diana DeGette (D)","cid":"N00006134","cycle":"2018","origin":"Center for Responsive Politics","source":"http://www.opensecrets.org/member-of-congress/industries?cid=N00006134&cycle=2018","last_updated":"06/10/2019"},"sector":[{"@attributes":{"sector_name":"Agribusiness","sectorid":"A","indivs":"7305","pacs":"10000","total":"17305"}},{"@attributes":{"sector_name":"Communic/Electronics","sectorid":"B","indivs":"33482","pacs":"66200","total":"99682"}},{"@attributes":{"sector_name":"Construction","sectorid":"C","indivs":"7510","pacs":"7500","total":"15010"}},{"@attributes":{"sector_name":"Defense","sectorid":"D","indivs":"10","pacs":"9000","total":"9010"}},{"@attributes":{"sector_name":"Energy/Nat Resource","sectorid":"E","indivs":"510","pacs":"15500","total":"16010"}},{"@attributes":{"sector_name":"Finance/Insur/RealEst","sectorid":"F","indivs":"104853","pacs":"62000","total":"166853"}},{"@attributes":{"sector_name":"Health","sectorid":"H","indivs":"34881","pacs":"292350","total":"327231"}},{"@attributes":{"sector_name":"Lawyers & Lobbyists","sectorid":"K","indivs":"91100","pacs":"39000","total":"130100"}},{"@attributes":{"sector_name":"Transportation","sectorid":"M","indivs":"1400","pacs":"19000","total":"20400"}},{"@attributes":{"sector_name":"Misc Business","sectorid":"N","indivs":"53178","pacs":"55000","total":"108178"}},{"@attributes":{"sector_name":"Labor","sectorid":"P","indivs":"0","pacs":"89200","total":"89200"}},{"@attributes":{"sector_name":"Ideology/Single-Issue","sectorid":"Q","indivs":"37430","pacs":"19500","total":"56930"}},{"@attributes":{"sector_name":"Other","sectorid":"W","indivs":"75275","pacs":"0","total":"75275"}}]}}

*/

const PartyIndicator = styled.h4`
  ${tw`rounded-full float-right inline-flex px-2 py-1 m-2 font-bold border-1 border-solid md:text-2lg lg:text-3xl`}
  background-color: ${props =>
    props.party === 'D'
      ? colors['blue-light']
      : props.party === 'R'
      ? colors['red-light']
      : colors['purple']}
  color: ${colors['white']};
`;

const ProfilePhoto = styled.img`
  ${tw`rounded-full h-auto w-1/3 `}
  max-width: 130px;
`;

const ProfileTop = styled(CardTop)`
  ${tw`px-2`}
`;
const ProfileWrapper = styled.div`
  ${tw`mx-2 h-full`}
`;
const ProfileCard = props => {
  const { BIO } = props;
  return (
    <CardWrapper>
      <ProfileWrapper>
        <ProfileTop>
          <Subtitle style={tw`float-left m-0`}>{BIO.firstlast}</Subtitle>
          <PartyIndicator party={BIO.party}> {BIO.party}</PartyIndicator>
        </ProfileTop>
        <CardBody style={{textAlign: 'left', margin: '1em'}}>
          <ProfilePhoto
            src={`https://theunitedstates.io/images/congress/225x275/${BIO.bioguide_id}.jpg`}
            />
            </CardBody>
            <CardBottom>
          <SocialBar
            facebook_id={BIO.facebook_id}
            twitter_id={BIO.twitter_id}
            youtube_url={BIO.youtube_url}
            website={BIO.website}
          />
        </CardBottom>
      </ProfileWrapper>
    </CardWrapper>
  );
};

export default ProfileCard;
