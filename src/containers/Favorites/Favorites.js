import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions';
import Card from '../Card/Card';
import './Favorites.css';

export const Favorites = ({
  movies, user, logoutUser, favorites,
}) => {
  const displayFavorites = favorites.map((favorite) => {
    const foundMovie = movies.find(movie => movie.movie_id === favorite);
    return (
      <Card
        {...favorite}
        {...foundMovie}
        key={favorite.movie_id}
        movie={foundMovie}
        favorite={favorite}
        user={user}
        favorites={favorites}
      />
    );
  });

  return (
    <div>
      {user.name ? (
        <header className="favorites-header">
          <h1>Favorites</h1>
          <section className="favorites-section">
            <Link to="/">Home</Link>
          </section>
        </header>
      ) : (
        <header>
          <h1>Favorites</h1>
          <a href="http://localhost:3001/login">Login</a>
          <a href="http://localhost:3001/sign-up">Sign Up</a>
        </header>
      )}
      <ul>{displayFavorites}</ul>
    </div>
  );
};

export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.userLogin,
  favorites: state.favorites,
});

export const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);

Favorites.propTypes = {
  movies: PropTypes.array,
  user: PropTypes.object,
  logoutUser: PropTypes.func,
  handleToggle: PropTypes.func,
  favorites: PropTypes.array,
};
