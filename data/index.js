const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path')
const fetch = require("node-fetch"); 


/* 
API Method : get Representatives from local directory
sets endpoint of "reps"
*/

//const repsRouter = express.Router()

const industryRouter = express.Router()


/*const repsMiddleware = (req, res, next) => {
	let stateCode = req.query.stateCode || 'IL';
	let filePath = path.normalize(__dirname + '/legislators/' + stateCode + '.json');
	console.log(filePath)
	fs.readFile(filePath, 'utf8', function (err,data) { 
		if (err) { 
			return console.log(err); 
		} 
		JSON.parse(data);
		res.send(data); 
	});
}*/
const industryMiddleware = (req, res, next) => {
	let cid = req.query.CID || 'N00035774';
	let indCode = req.query.indCode || 'Q13';

	let url = `http://www.opensecrets.org/api/?method=candIndByInd&cid=${cid}&cycle=2018&ind=${indCode}&apikey=88d1aa9112f23c0bdf6a3fddaef2ccdf&output=json`;
    let config = {
      method: 'HEAD',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': 'GET',
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
  };
 fetch(url, config)
    .then( response => {
    	if (response.ok){
    		console.log(response)
			handleData(response)
    	}
    }).catch(err => console.log(err));
}
app.use('/indByRep', industryMiddleware);


const handleData = (response) => {
	return response.json();
}


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(3099, () => {
 console.log(" 'History Is Watching' server running on port 3099");
});



