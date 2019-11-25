import React, { Component } from 'react';
import axios from 'axios';
const API = 'https://jsonplaceholder.typicode.com/todos';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }
  componentDidMount() {
    this.getStories();
  }
  getStories() {
    this.setState({ isLoading: true });
    axios.get(API)
      .then(result => {this.setState({
        hits: result.data,
        isLoading: false
      })
      console.log(this.state.hits);
      }
      )
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }
  render() {
    
    return (
      <div></div>
    );
  }
}
export default Users;