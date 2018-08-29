import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../actions'
import { Route, Link, NavLink, withRouter } from 'react-router-dom';
import { fetchUserData } from '../utils/apiCalls';



class LoginForm extends Component {
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
    const result = await fetchUserData(this.state.email, this.state.password)
    const { name, id } = result.data;
    this.props.userLogin(name, id)
    this.props.history.push('/')
  };


  render() {
    return (
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
        {/* <NavLink to='/'>LOGIN</NavLink> */}
        <button>LOGIN</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  userLogin: (name, id) => dispatch(getUserInfo(name, id))
});

export default withRouter(connect(null, mapDispatchToProps)(LoginForm))
