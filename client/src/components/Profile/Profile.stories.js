
  import React from 'react';
  import { storiesOf } from '@storybook/react';
  import Profile from '.'

const demBIO = {
    cid: 'N00006134',
    firstlast: 'Diana DeGette',
    lastname: 'DEGETTE',
    party: 'D',
    office: 'CO01',
    gender: 'F',
    first_elected: '1996',
    exit_code: '0',
    comments: '',
    phone: '202-225-4431',
    fax: '202-225-5657',
    website: 'http://degette.house.gov',
    webform: 'https://degette.house.gov/contact/send-me-an-email/email-me',
    congress_office: '2111 Rayburn House Office Building',
    bioguide_id: 'D000197',
    votesmart_id: '561',
    feccandid: 'H6CO01141',
    twitter_id: 'RepDianaDeGette',
    youtube_url: 'https://youtube.com/RepDianaDeGette',
    facebook_id: 'DianaDeGette',
    birthdate: '1957-07-29',
  };


const repBIO = {
  cid: 'N00006134',
  firstlast: 'Diana DeGette',
  lastname: 'DEGETTE',
  party: 'R',
  office: 'CO01',
  gender: 'F',
  first_elected: '1996',
  exit_code: '0',
  comments: '',
  phone: '202-225-4431',
  fax: '202-225-5657',
  website: 'http://degette.house.gov',
  webform: 'https://degette.house.gov/contact/send-me-an-email/email-me',
  congress_office: '2111 Rayburn House Office Building',
  bioguide_id: 'D000197',
  votesmart_id: '561',
  feccandid: 'H6CO01141',
  twitter_id: 'RepDianaDeGette',
  youtube_url: 'https://youtube.com/RepDianaDeGette',
  facebook_id: 'DianaDeGette',
  birthdate: '1957-07-29',
};
storiesOf('Profile Card', module).add('default', () => {
  return (
      <>
    <Profile BIO={demBIO} />
    </>
  );
});



// export default { title: 'Profile Card' };

// export const asDem = () => <ProfileCard BIO={demBIO} />;
// export const asRepub = () => <ProfileCard BIO={repBIO} />;

// export const withEmoji = () => (
//   <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
// );