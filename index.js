import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

import Header from './header';
import Router from './Router'
import Footer from './footer';
import LoginPage from './loginpage'
import { Provider } from 'react-redux'
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, compose, combineReducers, applyMiddleware    } from 'redux'
import thunk from 'redux-thunk';
import * as reducer from './reducer'
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

/* MiddleWare: logger */
const logger = store => {
  return next => {
    return action => {
      console.log('[middleWare]: dispatching', action);
      const result = next(action);
      console.log('[middleWare]: nextState', store.getState());
      return result;
    }
  }
}

const store = createStore(reducer.productsReducer,
initilState,
applyMiddleware(logger, thunk)
)

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      
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
            <Button variant="primary">Primary</Button>
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
