import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { addFavorite } from '../actions';

const MovieContainer = ({ movies, user, logoutUser, toggleFavorite }) => {
  console.log(user)
  const displayMovies = movies.map((movie, index) => (
    <li key={index}>
      <button onClick={() => toggleFavorite(movie)}>Favorite</button>
      <img src={movie.image} />
    </li>
  ));
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
  user: state.userLogin
});

export const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  toggleFavorite: (movie) => dispatch(addFavorite(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
