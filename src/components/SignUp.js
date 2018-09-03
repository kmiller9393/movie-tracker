import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { setUserData } from '../utils/apiCalls';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
    await setUserData(this.state.name, this.state.email, this.state.password);
    this.props.history.push('/');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter Name"
          type="text"
        />
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Enter Email"
          type="text"
        />
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
          type="text"
        />
        <button>SIGN UP</button>
      </form>
    );
  }
}

export default withRouter(SignUp);
