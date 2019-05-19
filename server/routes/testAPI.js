var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var uri = 'mongodb://diana-admin:xeTse8-dukpux-wafxaz@cluster0-ekjyi.gcp.mongodb.net/HistoryIsWatchingUs/Legislators';
    res.send('API is working properly: ' + uri);


});
module.exports = router;