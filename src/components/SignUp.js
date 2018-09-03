import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { setUserData } from '../utils/apiCalls';
import { NavLink } from 'react-router-dom';
import './SignUp.css';

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
      <div className="signup-container">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <article className="signup-article">
            <h1 className="signup-header">Sign Up Here</h1>
            <NavLink className="signup-home" to="/">
              Home
            </NavLink>
          </article>
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
          <button className="signup-button">SIGN UP</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
