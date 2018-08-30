import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { toggleFavorite } from '../actions';
import { addMovieToDatabase, deleteMovieFromDatabase } from '../utils/apiCalls'

const MovieContainer = ({ movies, user, logoutUser, handleToggle, favorites }) => {
  console.log(user)
  const displayMovies = movies.map((movie, index) => (
    <li key={index}>
      <button onClick={() => setFavoriteData(movie)}>Favorite</button>
      <img src={movie.image} />
    </li>
  ));

  const setFavoriteData = async (movie) => {
    if (!favorites.includes(movie)) {
      handleToggle(movie)
      await addMovieToDatabase(user, movie)
    } else {
      handleToggle(movie)
      await deleteMovieFromDatabase(user, movie)
    }
  }

  return (
    <div>
      {user.name ? <header>Welcome { user.name }<button onClick={logoutUser}> Sign Out </button> </header> : 
    <header>Welcome
      <a href="http://localhost:3001/login">Login</a>
      <a href="http://localhost:3001/sign-up">Sign Up</a>
    </header>}
    <ul>{displayMovies}</ul>
    </div>
  )
};

export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.userLogin,
  favorites: state.favorites
});

export const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  handleToggle: (movie) => dispatch(toggleFavorite(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
