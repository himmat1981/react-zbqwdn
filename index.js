import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Header from './header';
import Router from './Router'
import Footer from './footer';
import LoginPage from './loginpage'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware    } from 'redux'
import thunk from 'redux-thunk';
import login from './reducer'
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const initilState = {
  uname: '',
  pass: ""
}
const store = createStore(login,
initilState,
applyMiddleware(thunk)
)

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  myclick = () => {
     alert("hello");
  }
  render() {
    return (
      <div class="wrapper">
      <Header takeclick={this.myclick} author="himmat" text="working in reliance jio"/>
           <LoginPage />
         <Footer />
      </div>
     
    );
  }
}

render(
  <Provider store={store}>
     <App />
  </Provider>
  , document.getElementById('root'));
