import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovieToDatabase, deleteMovieFromDatabase } from '../utils/apiCalls';
import { toggleFavorite } from '../actions';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import './Card.css';

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  setFavoriteData = async movie => {
    const { user, favorites, handleToggle, movies } = this.props;
    if (!user.name) {
      this.props.history.push('/login');
      alert('You must log-in to favorite a movie!!!!');
    }
    if (!favorites.includes(movie) && !favorites.includes(movie.title)) {
      handleToggle(movie);
      await addMovieToDatabase(user, movie);
    } else {
      const foundMovie = movies.find(theMovie => theMovie.title === movie || theMovie === movie)
      handleToggle(movie);
      await deleteMovieFromDatabase(user, foundMovie);
    }
  };

  render() {
    let { image, favorite, movie } = this.props;
    return (
      <div className={this.state.toggle ? 'details' : 'Card'}>
        <article onClick={() => this.setState({ toggle: !this.state.toggle })}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>{movie.release}</p>
          <p>{movie.vote_average}</p>
        </article>
        <img
          onClick={() => this.setState({ toggle: !this.state.toggle })}
          src={image}
          alt="Murray Movie"
        />
        <button onClick={() => this.setFavoriteData(movie)}>
          FAVORITE
        </button>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleToggle: movie => dispatch(toggleFavorite(movie))
});

export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.userLogin,
  favorites: state.favorites
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Card));

Card.propTypes = {
  image: PropTypes.string,
  favorite: PropTypes.object,
  movie: PropTypes.object,
  favorites: PropTypes.array,
  handleToggle: PropTypes.func
}
