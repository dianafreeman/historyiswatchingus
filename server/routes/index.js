var express = require('express');
var router = express.Router();
var repActions = require('./fetchLegislators');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/reps/', function(req, res, next) {
    const state = req.query.state;
    if (!state) {
        return 'Please include a state.';
        die();
    }
    if (state) {
        //   res.send(state)
        repActions.fetchLegislators(state).then((results) => {
            res.send(JSON.stringify(results))
        });

    }
});

module.exports = router;