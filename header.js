import React, { Component } from 'react';
import 'tachyons';
import './style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css';
import {Button, Container, Row, Col } from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


import Users from './users'
import About from './about'
import Home from './home'
import Users from './userpage'
import AddUser from './adduser'
const Header = () =>  {
   return (
    <div class="flex flex-row bg-gold">
          <div class="w-25 pa3 mr2 mt2 h2">
              <img src="https://image.shutterstock.com/image-vector/shield-letter-s-logosafesecureprotection-logomodern-260nw-633031571.jpg" className='br-100 pa1 ba b--black-10 h3 w3' alt='avatar' />
          </div>
          <div class="w-75 pa3 mr2 mt2">
                <ul class="list dib fl">
                  <li class="fl pa1">
                    <Link to="/home">Home</Link>
                  </li>
                  <li class="fl pa1">
                    <Link to="/about">About</Link>
                  </li>
                  <li class="fl pa1">
                    <Link to="/users">Users</Link>
                  </li>
                  <li class="fl pa1">
                    <Link to="/add">Add Post</Link>
                  </li>
               </ul>
          </div>
   </div>  
  );
}
export default Header;
