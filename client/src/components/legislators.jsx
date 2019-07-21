import React, { Component } from 'react';
import Rep from './person.jsx';


class Legislators extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      legislators: null,
    };
		
	}

 
  render(){

  	return <Rep /> 
  }

}
  
export default Legislators;
     {/*<Rep style={{repstyle}} /> */}
