import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovieToDatabase, deleteMovieFromDatabase } from '../utils/apiCalls';
import { toggleFavorite } from '../actions';
import PropTypes from 'prop-types'
import './Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  setFavoriteData = async movie => {
    const { user, favorites, handleToggle } = this.props;
    if (!favorites.includes(movie) && !favorites.includes(movie.id)) {
      handleToggle(movie);
      await addMovieToDatabase(user, movie);
    } else {
      handleToggle(movie);
      await deleteMovieFromDatabase(user, movie);
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
          src={image || favorite.image}
          alt="Murray Movie"
        />
        <button onClick={() => this.setFavoriteData(movie)}>
          ADD TO FAVORITES
        </button>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleToggle: movie => dispatch(toggleFavorite(movie))
});

export default connect(
  null,
  mapDispatchToProps
)(Card);

Card.propTypes = {
  image: PropTypes.string,
  favorite: PropTypes.object,
  movie: PropTypes.object,
  favorites: PropTypes.array,
  handleToggle: PropTypes.func
}
