import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieContainer extends Component {
  constructor() {
    super();
  }


  render() {
    const displayMovies = this.props.movies.map(movie => <li>{movie}</li>)
    return(
      <ul>
      {displayMovies}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieContainer)