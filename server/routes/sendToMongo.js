require('dotenv').config();
var fetch = require("node-fetch");
var states = require('datasets-us-states-abbr-names');
var MongoClient = require('mongodb').MongoClient


/*
 *       Open Secrets API
 *
 *
 */
function getLegislatorsFromOpenSecrets(stateCode) {
    let url = 'https://www.opensecrets.org/api/?method=getLegislators&id=' + stateCode + '&apikey=' + process.env.OPEN_SECRETS_KEY + '&output=json';
    fetch(url, {
            mode: "no-cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            var allRepsForState = [];
            var reps = json.response.legislator;
            for (var r in reps) {
                var repAttributes = reps[r]['@attributes'];
                repAttributes['state'] = stateCode;
                allRepsForState.push(repAttributes);
            }
            // console.log(reps)
            saveToMongo(allRepsForState);

        })
        .then(console.log('done!'))
        .catch(err => console.error(err))
};