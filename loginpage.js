import React, { Component } from 'react';
import { createStore   } from 'redux'
import rootReducer from './reducer'
import { connect } from 'react-redux'
import { login } from './actions'

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    
    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="Login">
        <form >
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

          <input type="button" value="Log In" data-test="submit" 
          onClick={() => login(this.state.username,
       this.state.password
        )}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  success: state.counter,
})



const mapDispatchToProps = dispatch => ({
   login : (uname, pass) => bindActionCreators(login(uname, pass, dispatch))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);