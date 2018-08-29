import React, { Component } from 'react';
import { connect } from 'react-redux';

const MovieContainer = ({ movies, user }) => {
  console.log(user)
  const displayMovies = movies.map((movie, index) => (
    <li key={index}>
      <img src={movie.image} />
    </li>
  ));
  return (
    <div>
      {user.length ? <header>Welcome { user[0].name }</header>: <header>Welcome</header>}
    <a href="http://localhost:3001/login">Login</a>
    <a href="http://localhost:3001/sign-up">Sign Up</a>
    <ul>{displayMovies}</ul>
    </div>
  )
};

export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.userLogin
});

export default connect(mapStateToProps)(MovieContainer);
