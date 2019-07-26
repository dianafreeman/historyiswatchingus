
// require to call API Keys. Set them in a .env file in the parent directory.
require('dotenv').config(); 

// require to collect data from json files in a child of the current directory
const jsonfile = require('jsonfile');


// Require and configure to allow updates to json file properties
// const PropertiesReader = require('properties-reader');

// Basic dpendencies 
const fetch = require("node-fetch"); 
const states = require( 'datasets-us-states-abbr-names' );
const http = require('https');

saveLegislatorDataToDirectory();


// ------- EVERYTHING BELOW THIS LINE IS USED IN THE saveLegislatorDataToDirectory METHOD ----//

function saveLegislatorDataToDirectory(){
    let stateAbbrvs = Object.keys(states);
    for (let abbr in stateAbbrvs){
    getLegislators(stateAbbrvs[abbr]) // Get Legislators for STATE
  }
}

/*
METHOD: getLegislators(stateCode)
Get Legislators for STATE
*/

function testSaveLegislators(){
 //   let state = "IL";
//    getLegislators('AK') // Get Legislators for STATE
}

function getLegislators(stateCode){ 
// console.log(stateCode)
  let url = 'https://www.opensecrets.org/api/?method=getLegislators&id='+stateCode+'&apikey='+ process.env.OPEN_SECRETS_KEY +'&output=json';
  fetch( url , {
        mode: "no-cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => response.json())
    .then(text => {
      //  console.log(JSON.stringify(text));
     // creates a .json file for the response
       saveLegislatorJsonFile( text, stateCode)
    })
    .catch(err => console.error(err))

}

/*
Return the Legislators for STATE as a json file
*/
function saveLegislatorJsonFile( jsonString , stateCode ){
  /*
  first, check to see if accessing the file creates a "not found" error.
  If so, create a new json file.
 
  fs.access('data/legislators/'+ stateCode +'.json', (err) => {
  if (err) {
    console.log("The file does not exsist! Creating a "+ stateCode +".json file now...");
   */
   let destinationFile = 'data/legislators/'+ stateCode +'.json';
    jsonfile.writeFile(destinationFile, jsonString, function (err) {
          if (err) console.error(err)
        });
    // let destFileProperties = PropertiesReader(destinationFile)
    // destFileProperties.set('Last API Fetch/Refesh', new Date().getTime())
  }

//});

//}
/*
Testing Stuff
*/

function testEnv(){
var abbrvs = Object.keys(states)
 if ((abbrvs.length > 0 ) && (process.env.OPEN_SECRETS_KEY)) {
    console.log("Yep, this appears to be working");
 } else {
    console.log('nope, something went wrong')
    console.log('key is '+ process.env.OPEN_SECRETS_KEY)
}
}

    	