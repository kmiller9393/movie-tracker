import React, { Component } from 'react';
import './App.css';
import MovieContainer from '../../containers/MovieContainer';
import { cleanMurrayData } from '../.././utils/helper'

class App extends Component {

  async componentDidMount() {
    const murrayMovies = await cleanMurrayData()
    console.log(murrayMovies)

  }
  
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
