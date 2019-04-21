require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;
var uri = process.env.DB_CONN;
var client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(function(err) {
    if (err) throw err;
    console.log(client)
        // perform actions on the collection object
    client.close();
});