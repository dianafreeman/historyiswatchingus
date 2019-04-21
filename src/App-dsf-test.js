import React, { Component } from 'react';
import Head from './components/header.jsx';
import StateSelect from './components/state-select.jsx'
import { fetchLegislators }

class App extends Component {
 setCurrentLocation(newValue) {
    console.log('this is the State code: ' + newValue);
    this.setState({'currentLocation': newValue});

  }

 onSubmit(e){
  e.preventDefault()
  //console.log(this.state.currentLocation)
 }

  render() {
    return (
        <div>
        <Head />  
            <div className="text-center">
              <form onSubmit={ e =>{
                e.preventDefault()
                dispatch(getLegislators(StateSelect))

              }this.onSubmit}>
                  <StateSelect />
                  <button type="submit" className="btn btn-action"> Go! </button>
              </form>
            </div>
        <Legislators />
        </div>
    );
  }
}

export default App;



