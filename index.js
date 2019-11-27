import React, { Component } from 'react';
import { render } from 'react-dom';


import Header from './header';
import Routes from './Routes'
import Footer from './footer';
import Users from './userpage'
import AddUser from './adduser'
import 'tachyons'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, compose, combineReducers, applyMiddleware    } from 'redux'
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();



import * as reducer from './reducer'




const initilState = {
  success: '',
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
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="wrapper"> 
        <Router  history={history}> 
          <Header />
            <Routes />  
         </Router>
         <Footer />
      </div>
    );
  }
}

render(
  <Provider store={store}>
     <App  name="himmat" designation="webdeveloper"/>
  </Provider>
  , document.getElementById('root'));
