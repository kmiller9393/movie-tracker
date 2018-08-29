import React, { Component } from 'react';
import { connect } from 'react-redux';

const MovieContainer = ({ movies }) => {
  const displayMovies = movies.map((movie, index) => (
    <li key={index}>
      <img src={movie.image} />
    </li>
  ));
  return <ul>{displayMovies}</ul>;
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MovieContainer);
