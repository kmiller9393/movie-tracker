import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    const response = await fetch('http://localhost:3000/api/users');
    const result = await response.json();
    console.log(result);
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
        <button>Login</button>
      </form>
    );
  }
}

export default LoginForm;
