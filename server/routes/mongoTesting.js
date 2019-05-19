require('dotenv').config();
var fetch = require("node-fetch");
var states = require('datasets-us-states-abbr-names');
var MongoClient = require('mongodb').MongoClient

/*
* Loop through all US States 
*/
var entries = Object.entries(states);
for (var s in entries) {
    var abbrv = entries[s][0];
    getLegislatorsFromOpenSecrets(abbrv)
}


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
            saveStateInfoToMongo(allRepsForState);

        })
        .then(console.log('done!'))
        .catch(err => console.error(err))
};


function saveStateInfoToMongo(StateObj) {
    var uri = 'mongodb+srv://' + process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASS + '@cluster0-ekjyi.gcp.mongodb.net/test?retryWrites=true';
    var promise = new Promise(function(resolve, reject) {
        //do something
        MongoClient.connect(uri, { useNewUrlParser: true }, function(err, db) {
            var dbObj = db.db("HistoryIsWatchingUs");
            if (StateObj.length > 1) {
                dbObj.collection("Legislators").insertMany(StateObj);
                db.close()
                resolve()
            } else {
                reject()
            }
        });
    }); // end promise
    promise.
    then(function() {
        console.log('Success, You have added legislators!');
    }).
    catch(function() {
        console.log('Some error has occured');
    });

}
