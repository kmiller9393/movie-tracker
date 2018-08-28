import React, { Component } from 'react';
import './App.css';
import MovieContainer from '../../containers/MovieContainer';
import { cleanMurrayData } from '../.././utils/helper';
import { populateMovies } from '../../actions';
import { connect } from 'react-redux';

class App extends Component {
  async componentDidMount() {
    const murrayMovies = await cleanMurrayData()
    this.props.getMovies(murrayMovies)
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



export const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => dispatch(populateMovies(movies))
})


export default connect(null, mapDispatchToProps)(App)
