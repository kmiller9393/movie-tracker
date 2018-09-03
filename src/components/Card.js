import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovieToDatabase, deleteMovieFromDatabase } from '../utils/apiCalls';
import { addFavorite, deleteFavorite } from '../actions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './Card.css';

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  addFavoriteData = async movie => {
    const { user, addMovie } = this.props;

    if (!user.name) {
      console.log(user);
      this.props.history.push('/login');
      alert('You must log-in to favorite a movie!');
    } else {
      addMovie(movie);
      await addMovieToDatabase(user, movie);
    }
  };

  deleteFavoriteData = async movie => {
    const { deleteMovie, user } = this.props;

    deleteMovie(movie);
    await deleteMovieFromDatabase(user, movie);
  };

  render() {
    let { image, movie, favorites } = this.props;
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
        {!favorites.includes(movie.movie_id) && (
          <button
            className="add-button"
            onClick={() => this.addFavoriteData(movie)}
          >
            FAVORITE
          </button>
        )}
        {favorites.includes(movie.movie_id) && (
          <button
            className="delete-button"
            onClick={() => this.deleteFavoriteData(movie)}
          >
            UNFAVORITE
          </button>
        )}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addMovie: movie => dispatch(addFavorite(movie)),
  deleteMovie: movie => dispatch(deleteFavorite(movie))
});

export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.userLogin,
  favorites: state.favorites
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Card)
);

Card.propTypes = {
  image: PropTypes.string,
  favorite: PropTypes.number,
  movie: PropTypes.object,
  favorites: PropTypes.array,
  handleToggle: PropTypes.func
};
