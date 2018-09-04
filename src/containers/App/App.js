import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import SignUp from '../../components/SignUp/SignUp';
import LoginForm from '../LoginForm/LoginForm';
import { cleanMurrayData } from '../.././utils/helper';
import { populateMovies } from '../../actions';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Favorites from '../Favorites/Favorites';
import './App.css';

export class App extends Component {
  componentDidMount() {
    this.fetchMurrayData();
  }

  fetchMurrayData = async () => {
    const murrayMovies = await cleanMurrayData();
    this.props.getMovies(murrayMovies);
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MovieContainer} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/sign-up" render={() => <SignUp />} />
        <Route exact path="/favorites" render={() => <Favorites />} />
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

App.propTypes = {
  getMovies: PropTypes.func
};
