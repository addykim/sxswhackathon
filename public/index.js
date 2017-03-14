import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Index extends Component {
  render() {
    return (
      <div>
        <h1>What activity are you doing today?</h1>
        <select>
          <option value="yoga">Yoga</option>
          <option value="weight-lifting">Weight lifting</option>
          <option value="running">Running</option>
        </select>
      </div>
      );
  }
}

ReactDOM.render(<Index/>, document.getElementById('content'));