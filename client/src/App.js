/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */

import "./assets/css/App.css";
import React, { Component } from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import StateSelect from "react-select-us-states";
import { fetchLegislators } from "./reducers/fetchLegislators";
import Head from "./containers/header";
import Legislators from "./components/legislators";

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: '',
      legislators: [],
    };

    this.onSubmit.bind(this);
    this.onStateSelect.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  onSubmit(e) {
    e.preventDefault();
  }

  onStateSelect(e) {
    e.preventDefault();
    const newValue = e.target.value;
    this.setState({ currentState: newValue });

  }
  


  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <div className="row">
            <Head />
          </div>
          <div className="row">
            <div className="col-sm-11 mx-auto">
              <div className="text-center">
                <form className="stateSelect" onSubmit={this.onSubmit}>
                  <StateSelect className="form-control" onChange={this.onStateSelect} />
                  <button type="submit" className="btn btn-info"> Go! </button>
                </form>
              </div>
              <Legislators />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
