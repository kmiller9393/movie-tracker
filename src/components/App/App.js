import React, { Component } from 'react';
import MovieContainer from '../../containers/MovieContainer';
import SignUp from '../SignUp';
import LoginForm from '../../containers/LoginForm';
import { cleanMurrayData } from '../.././utils/helper';
import { populateMovies } from '../../actions';
import { connect } from 'react-redux';
import { Route, Link, NavLink, withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const murrayMovies = await cleanMurrayData();
    this.props.getMovies(murrayMovies);
  }

  render() {
    return (
      <div className="App">
        <h1>Murray Tracker</h1>
        <Route exact path="/" component={MovieContainer} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/sign-up" component={SignUp} />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  getMovies: movies => dispatch(populateMovies(movies))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
