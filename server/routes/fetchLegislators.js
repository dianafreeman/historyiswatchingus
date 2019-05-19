require('dotenv').config();
const client = require('mongodb').MongoClient;
const assert = require('assert');

const dbName = 'HistoryIsWatchingUs';

exports.fetchLegislators = (STATE_CODE) => {
    return new Promise((resolve, reject) => {
        console.log(STATE_CODE)
        const uri = 'mongodb+srv://' + process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASS + '@cluster0-ekjyi.gcp.mongodb.net';
        const results = [];
        client.connect(function() {
            assert.equal(null, err);
            console.log("Connected correctly to server");

            const db = client.db(dbName);

            let query = {
                state: STATE_CODE
            }
            //  console.log(dbObj.collection("Legislators").find(query))
            let cursor = dbObj.collection("Legislators").find(query);
            cursor.forEach((result) => {
                //  console.log(result)
                results.push(result);
            })


            resolve(results);
            break;


        }).catch((error) => {
            console.log(error)
        })


        db.close()

    });
}


module.exports = exports;