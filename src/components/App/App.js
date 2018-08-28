import React, { Component } from 'react';
import './App.css';
import MovieContainer from '../../containers/MovieContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Murray Tracker</h1>
        <MovieContainer />
      </div>
    );
  }
}

export default App;
