import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {Router,Route,Switch} from 'react-router';
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'

import reduce from './js/reducers'
import Login from './js/login';
import User from './js/user';
import Error from './js/error';

class Index extends Component {
  render() {
    return (
      <div>
        <h1>What activity are you doing today?</h1>
        <select
            defaultValue="">
          <option value="" disabled="disabled">Select an Activity</option>
          <option value="yoga">Yoga</option>
          <option value="weight-lifting">Weight lifting</option>
          <option value="running">Running</option>
        </select>
        {this.props.children}
      </div>
    );
  }
}

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    reducers: reduce,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Login/>
            <Route exact path="/" component={Index}/>
            <Route path="/#/user" component={User}/>
            <Route path="/error/:errorMsg" component={Error}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));