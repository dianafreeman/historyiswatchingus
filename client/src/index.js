import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store';
import Explorer from './components/APIExplorer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import 'typeface-open-sans';
import 'typeface-open-sans-condensed';

const GlobalStyle = createGlobalStyle`
  html { 
    height: 100%;
    background-size: cover;
    background-color: #1C1C1C;
  }
`
const RoutedApp = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route path="/explore">
          <Explorer />
        </Route>
        <Route exact path="/">
          <App store={Store} />
        </Route>
      </Switch>
    </Router>
  );
};
ReactDOM.render(<RoutedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
