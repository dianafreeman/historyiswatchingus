var openSecretsKey = 'd6baa8054d388ade4d57c9e24ef19ced';
var GoogleKey = "AIzaSyBeJ7EpLw9vtzW1unbbFUkSY6gcsVeHGQs"

function getIndustryContributors(CandidateID){

	var cid = CandidateID;
  	var url = "https://www.opensecrets.org/api/?method=method=candIndustry&cid="+cid+"&apikey="+ openSecretsKey +"&output=json";
	fetch(url)
	.then(function(response){
	  return response.json();
  })
  .then(function(theJson) {
  	var data = JSON.parse(JSON.stringify(theJson));
  	var reps = data.response.industry
  	console.log(reps)
}

function getIndustryDirectory(){
var url = 'https://sheets.googleapis.com/v4/spreadsheets/16MF5dxGiPa92WXLskT1OBK61eTa8CPSWOaEUBFTiZgc/values/crpIndustryCodes?key='+GoogleKey;

fetch(url)
	.then(function(response){
	  return response.json();
  })
  .then(function(theJson) {
  	console.log(JSON.parse(JSON.stringify(theJson)))
}

function getComitteeDirectory(){
var url = 'https://sheets.googleapis.com/v4/spreadsheets/16MF5dxGiPa92WXLskT1OBK61eTa8CPSWOaEUBFTiZgc/values/congCmteCodes?key='+GoogleKey;

fetch(url)
	.then(function(response){
	  return response.json();
  })
  .then(function(theJson) {
  	console.log(JSON.parse(JSON.stringify(theJson)))
}

/* 
TO DO 
Create Industry Lookup Funciton
*/