import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Header from './header';
import Router from './Router'
import Footer from './footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Home extends Component {
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
           <Router />
         <Footer />
      </div>
     
    );
  }
}
