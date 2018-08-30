import React from 'react';
import { connect } from 'react-redux';
import { addMovieToDatabase, deleteMovieFromDatabase } from '../utils/apiCalls';
import { toggleFavorite } from '../actions';

const Card = ({ image, movie, user, favorites, handleToggle }) => {
  const setFavoriteData = async movie => {
    if (!favorites.includes(movie)) {
      handleToggle(movie);
      await addMovieToDatabase(user, movie);
    } else {
      handleToggle(movie);
      await deleteMovieFromDatabase(user, movie);
    }
  };

  return (
    <div>
      <img src={image} alt="Murray Movie" />
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
