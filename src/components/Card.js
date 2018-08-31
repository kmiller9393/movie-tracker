import React from 'react';
import { connect } from 'react-redux';
import { addMovieToDatabase, deleteMovieFromDatabase } from '../utils/apiCalls';
import { toggleFavorite } from '../actions';
import Favorites from '../containers/Favorites';

const Card = ({ poster_path, image, movie, user, favorites, handleToggle, favorite }) => {
  const setFavoriteData = async movie => {
    console.log(movie)
    if (!favorites.includes(movie) && !favorites.includes(movie.id)) {
      handleToggle(movie);
      await addMovieToDatabase(user, movie);
    } else {
      handleToggle(movie);
      await deleteMovieFromDatabase(user, movie);
    }
  };

  return (
    <div>
      <img src={image || favorite.image} alt="Murray Movie" />
      <button onClick={() => setFavoriteData(movie)}>Favorite</button>
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  handleToggle: movie => dispatch(toggleFavorite(movie))
});

export default connect(
  null,
  mapDispatchToProps
)(Card);
