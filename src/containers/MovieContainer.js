import React from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Link } from 'react-router-dom';
import './MovieContainer.css'
import PropTypes from 'prop-types'

const MovieContainer = ({
  movies,
  user,
  logoutUser,
  handleToggle,
  favorites
}) => {
  const displayMovies = movies.map(movie => {
    if  (movie.image.includes('null')) {
      return
    }
    return <Card
       {...movie}
       key={movie.id}
       movie={movie}
       user={user}
       favorites={favorites}
     />
  });

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
          <h2>
          Welcome
          </h2>
          <section>
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
}
