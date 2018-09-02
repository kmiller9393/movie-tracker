import React, { Component } from 'react';
import MovieContainer from '../../containers/MovieContainer';
import SignUp from '../SignUp';
import LoginForm from '../../containers/LoginForm';
import { cleanMurrayData } from '../.././utils/helper';
import { populateMovies } from '../../actions';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import './App.css';
import Favorites from '../../containers/Favorites';

class App extends Component {
  async componentDidMount() {
    const murrayMovies = await cleanMurrayData();
    this.props.getMovies(murrayMovies);
  }

// <a href="https://fontmeme.com/netflix-font/"><img src="https://fontmeme.com/permalink/180902/ac7a65b3a8454e0ff8d71d4efa88c41c.png" alt="netflix-font" border="0"></a>


  render() {
    return (
      <div className="App">
       
        <h1 className='title-container'> <img className='murray-tracker'src="https://fontmeme.com/permalink/180902/ac7a65b3a8454e0ff8d71d4efa88c41c.png" alt="netflix-font" border="0" /> </h1>
        <Route exact path="/" component={MovieContainer} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/sign-up" component={SignUp} />
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
}
