import React, { Component } from 'react';
import Head from './components/header.jsx';
import StateSelect from './components/state-select.jsx'
import Legislators from './components/legislators.jsx';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './assets/css/App.css';
import './assets/css/new-age.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootswatch-litera.min.css';
import { fetchLegislators } from './assets/js/fetchLegislators.js' { /*import {initMap} from './assets/js/map-vanilla.js';*/ } { /* import SimpleMap from './assets/js/map.js'; */ }


const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
    constructor(props) {
        super(props);
        this.setCurrentLocation = this.setCurrentLocation.bind(this);
        this.setState({
            'currentLocation': null,
            'legislators': null
        })
    }


    setCurrentLocation(newValue) {
        console.log('this is the State code: ' + newValue);
        this.setState({ 'currentLocation': newValue });

    }

    onSubmit(e) {
        e.preventDefault()
            //console.log(this.state.currentLocation)
    }


    render() {
        return ( <
            Provider store = { store } >
            <
            div >
            <
            Head / >
            <
            div className = "text-center" >
            <
            form onSubmit = { this.onSubmit } >
            <
            StateSelect / >
            <
            button type = "submit"
            className = "btn btn-action" > Go! < /button> <
            /form> <
            /div> <
            Legislators / >
            <
            /div> <
            /Provider>
        );
    }
}

export default App;