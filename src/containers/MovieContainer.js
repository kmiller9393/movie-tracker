import React, { Component } from 'react';
import { connect } from 'react-redux';

const MovieContainer = ({ movies }) => {
  const displayMovies = movies.map((movie, index) => (
    <li key={index}>
      <img src={movie.image} />
    </li>
  ));
  return (
    <div>
    <a href="http://localhost:3001/login">Login</a>
    <ul>{displayMovies}</ul>
    </div>
  )
};

export const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MovieContainer);
