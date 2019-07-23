import React, { Component } from 'react';
import store from './store';
import SelectUSState from 'react-select-us-states';
import { fetchLegislators } from '../assets/js/fetchLegislators'
import { setLocation } from '../actions'

class LocationForm extends Component {

	constructor(props) {
		super(props);
		this.state = {selectedState: null}

		this.handleSelection = this.handleSelection.bind(this);
	}

	handleSelection(newValue) {
	console.log('this is the State code: ' + newValue);
    this.setState({'selectedState': newValue })

	}

	onSubmit(e){
	e.preventDefault()
	store.dispatch(setLocation)

}

render(props){
	return(
		<form className="form-group" onSubmit={this.onSubmit}>
		<label>
		Select a state: 
		<SelectUSState id="stateSelect" className="form-control" onChange={this.handleSelection}/>
		</label>
		<button type="submit" className="btn btn-action"> Go! </button>
		</form>
		);
}
}

export default LocationForm;