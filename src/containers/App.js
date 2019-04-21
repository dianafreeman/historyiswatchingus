import React, { Component } from 'react';
import Head from '../containers/header';
import Rep from '../components/person';
import LocationForm from '../components/locationForm'
import Legislators from '../components/legislators';
import '../assets/css/App.css';


class App extends Component {



  render() {
    return (
        <div>
        <Head />  
        <div className="col-sm-10 offset-sm-1 text-center mb-4">
        <LocationForm />
        </div>
        </div>
    );
  }
}

export default App;



