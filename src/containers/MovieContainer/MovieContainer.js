import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { Link } from 'react-router-dom';
import './MovieContainer.css';
import PropTypes from 'prop-types';

export const MovieContainer = ({ movies, user, logoutUser, favorites }) => {
  const displayMovies = movies.map(movie => {
    if (movie.image.includes('null')) {
      return;
    }
    return (
      <Card
        {...movie}
        key={movie.movie_id}
        movie={movie}
        user={user}
        favorites={favorites}
      />
    );
  });

  return (
    <div className="movie-container">
      {user.name ? (
        <header className="signout-header">
          <img
            className="home-image"
            src="https://fontmeme.com/permalink/180902/ac7a65b3a8454e0ff8d71d4efa88c41c.png"
            alt="netflix-font"
            border="0"
          />
          <p className="welcome-text">{`Welcome, ${user.name}`}</p>
          <section className="right-links">
            <Link to="/favorites">Favorites</Link>
            <button className="signout-button" onClick={logoutUser}>
              Sign Out
            </button>
          </section>
        </header>
      ) : (
        <header className="login-header">
          <img
            className="home-image"
            src="https://fontmeme.com/permalink/180902/ac7a65b3a8454e0ff8d71d4efa88c41c.png"
            alt="netflix-font"
            border="0"
          />
          <section className="right-links">
            <a href="http://localhost:3001/login">Login</a>
            <a href="http://localhost:3001/sign-up">Sign Up</a>
          </section>
        </header>
      )}
      <ul>{displayMovies}</ul>
    </div>
  );
};

export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.userLogin,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);

MovieContainer.propTypes = {
  logoutUser: PropTypes.func,
  movies: PropTypes.array,
  logoutUser: PropTypes.func,
  handleToggle: PropTypes.func,
  favorites: PropTypes.array
};
