import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo, populateFavorites } from '../../actions';
import { withRouter, NavLink } from 'react-router-dom';
import { fetchUserData, getUserFavorites } from '../../utils/apiCalls';
import PropTypes from 'prop-types';
import './LoginForm.css';

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const result = await fetchUserData(this.state.email, this.state.password);
    if (result) {
      const { name, id } = result.data;
      this.props.userLogin(name, id);
      const userFavorites = await getUserFavorites(id);
      const userFavoritesIds = userFavorites.map(favorite => favorite.movie_id);
      this.props.getFavorites(userFavoritesIds);
      this.props.history.push('/');
    }
    return;
  };

  render() {
    return (
      <div>
        <section className="login-section">
          <img
            className="login-image"
            src="https://fontmeme.com/permalink/180902/ac7a65b3a8454e0ff8d71d4efa88c41c.png"
            alt="netflix-font"
            border="0"
          />
          <NavLink className="login-home-link" to="/">
            Home
          </NavLink>
        </section>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
            type="text"
          />
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            type="text"
          />
          <button className="login-button">LOGIN</button>
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  userLogin: (name, id) => dispatch(getUserInfo(name, id)),
  getFavorites: favorites => dispatch(populateFavorites(favorites))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LoginForm)
);

LoginForm.propTypes = {
  userLogin: PropTypes.func,
  getFavorites: PropTypes.func
};
