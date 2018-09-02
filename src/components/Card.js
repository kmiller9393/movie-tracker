import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovieToDatabase, deleteMovieFromDatabase } from '../utils/apiCalls';
import { addFavorite } from '../actions';
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
    const { user, favorites, addMovie, movies } = this.props;

    if (!user.name) {
      this.props.history.push('/login');
      alert('You must log-in to favorite a movie!');
    } else {
      addMovie(movie);
      await addMovieToDatabase(user, movie);
    }
  };

  deleteFavoriteData = async movie => {
    console.log('DELETEFAV-ORITE');
  };

  // setFavoriteData = async movie => {
  //   const { user, favorites, handleToggle, movies } = this.props;
  //   if (!user.name) {
  //     this.props.history.push('/login');
  //     alert('You must log-in to favorite a movie!!!!');
  //   }
  //   if (!favorites.includes(movie.movie_id)) {
  //     handleToggle(movie);
  //     await addMovieToDatabase(user, movie);
  //   } else {
  //     const foundMovie = movies.find(
  //       theMovie => console.log(movie) || theMovie.movie_id === movie
  //     );
  //     console.log(foundMovie);
  //     handleToggle(movie);
  //     await deleteMovieFromDatabase(user, foundMovie);
  //   }
  // };

  render() {
    let { image, favorite, movie, favorites } = this.props;
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
          <button onClick={() => this.addFavoriteData(movie)}>FAVORITE</button>
        )}
        {favorites.includes(movie.movie_id) && (
          <button onClick={() => this.deleteFavoriteData(movie)}>
            UNFAVORITE
          </button>
        )}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addMovie: movie => dispatch(addFavorite(movie))
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
  favorite: PropTypes.object,
  movie: PropTypes.object,
  favorites: PropTypes.array,
  handleToggle: PropTypes.func
};
