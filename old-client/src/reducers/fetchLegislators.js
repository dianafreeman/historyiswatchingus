
export function fetchLegislators(LOC){
	var LOC = "IL";
    var url = 'https://www.opensecrets.org/api/?method=getLegislators&id=' + LOC + '&apikey=d6baa8054d388ade4d57c9e24ef19ced&output=json';

    fetch(url, {
       	method: "GET", // *GET, POST, PUT, DELETE, etc.
       	headers: {
       		'content-type': 'application/json'
       	},
        mode: "no-cors", // no-cors, cors, *same-origin
    }).then(response => response.json())
      .then(data => console.log(data))  //this.setState({ data }))
      .catch(err => console.log('something went wrong'))
}