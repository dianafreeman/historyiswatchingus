/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
import fetch from 'node-fetch';
import states from 'datasets-us-states-abbr-names';

// require to call API Keys. Set them in a .env file in the parent directory.
require('dotenv').config();

const getLegislators = () => {
  const Reps = [];
  const abbrvs = [...Object.keys(states)];
  for (let a = 0; a < abbrvs.length; a++) {
    const url = `https://www.opensecrets.org/api/?method=getLegislators&id=${abbrvs[a]}&apikey=${process.env.OPEN_SECRETS_KEY}&output=json`;
    fetch(url, {
      mode: 'no-cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => Reps.push(response.json()));
  }
  console.log(Reps);
  return Reps;
};

const DataStructure = {
  reps: {},
  getReps: () => getLegislators()

  // return reps;
  ,
};

export default DataStructure;
