import React, { Component } from 'react';

export default class Playlist extends Component {
  constructor(props) {
    super(props)
    this.state = {playlist: null}
  }
  componentDidMount() {
    // replace /me with the endpoint you create in app.js
    // the first .then gets a response and parses the json
    fetch('/playlist', {method: 'GET'})
      .then((response) => response.json())
      .then((data) => {
        // this one sets the state and refreshes the render to show off info
        this.setState(playlist: data)
      }).catch((error) => {
        console.error(error)
      })
  }
  render() {
    // once componentDidMount does its this.setState, it calls render() again and this if statement should be true
    if (this.state.user !== null) {
      return (
        <p>Paste your widget here or whatever</p>
      );
    }
    // Loading should show up the first time this page loads
    return <span>Loading...</span>
  }
}