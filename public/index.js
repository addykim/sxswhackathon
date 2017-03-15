import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';

// import history from './js/history';
import reduce from './js/reducers'

import Login from './js/login';
import Error from './js/error';
import Playlist from './js/playlist';

const SPOTIFY_ACCESS_TOKEN = 'spotify_access_token'

class Index extends Component {
  componentWillMount() {
    this.state = {
      accessToken: cookie.load(SPOTIFY_ACCESS_TOKEN)
    }
  }
  onLogin(accessToken) {
    this.setState({})
    cookie.save(SPOTIFY_ACCESS_TOKEN)
  }
  // unused at the moment
  onLogout(){
    cookie.remove(SPOTIFY_ACCESS_TOKEN)
  }
  render() {
    return (
      <div>
        <Login loggedIn={!!this.state.accessToken}/>
        <h1>What activity are you doing today?</h1>
        <select
            defaultValue="">
          <option value="" disabled="disabled">Select an Activity</option>
          <option value="yoga">Yoga</option>
          <option value="weight-lifting">Weight lifting</option>
          <option value="running">Running</option>
        </select>
        <Playlist/>
      </div>
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById('content'));