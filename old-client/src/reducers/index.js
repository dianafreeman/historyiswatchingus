 import { setLocation } from "../actions";


const initialState = {
	locationChoice: null
};

const locationHandler = (state = initialState, action) => {
	switch (action.type) {
		case setLocation:
		state.locationChoice.concat(action.locationChoice)
		return state;

	default: 
		return state
	}
 
};

export default locationHandler;