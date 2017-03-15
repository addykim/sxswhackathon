import React, { Component } from 'react';
import User from './login';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: this.props.loggedIn,
      user: null
    }
  }
  componentDidMount() {
    fetch('/me', {method: 'GET'})
      .then((response) => response.json())
      .then((data) => {
        this.setState({user: data})
      }).catch((error) => {
        console.error(error)
      })
  }
  render() {
    if (!this.state.isLoggedIn) {
      return (<div className="login"><a href="/login">Login</a></div>);
    } 
    if (this.state.user !== null) {
      return (<div className="login">Logged in as {this.state.user.display_name}</div>) 
    }
    return <span>Loading...</span>
  }
}