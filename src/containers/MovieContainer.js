import React from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Link } from 'react-router-dom';
import './MovieContainer.css'

const MovieContainer = ({
  movies,
  user,
  logoutUser,
  handleToggle,
  favorites
}) => {
  const displayMovies = movies.map(movie => (
    <Card
      {...movie}
      key={movie.id}
      movie={movie}
      user={user}
      favorites={favorites}
    />
  ));

  return (
    <div className="movie-container">
      {user.name ? (
        <header>
          <Link to="/favorites">favorites</Link>
          Welcome {user.name}
          <button onClick={logoutUser}> Sign Out </button>{' '}
        </header>
      ) : (
        <header>
          Welcome
          <a href="http://localhost:3001/login">Login</a>
          <a href="http://localhost:3001/sign-up">Sign Up</a>
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
