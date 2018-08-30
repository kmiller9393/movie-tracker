import React from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

const Favorites = ({
  movies,
  user,
  logoutUser,
  handleToggle,
  favorites
}) => {
  const displayFavorites = favorites.map(favorite => {
    console.log(favorite)
    const foundMovie = movies.find(movie => movie.id === favorite.movie_id)
    console.log(foundMovie)
    return <Card
    {...foundMovie}
    key={foundMovie.id}
    movie={foundMovie}
    user={user}
    favorites={favorites}
  />
  }
  );

  return (
    <div>
      {user.name ? (
        <header>
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
      <ul>{displayFavorites}</ul>
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
)(Favorites);
