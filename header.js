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



import Users from './users'
import About from './about'
import Home from './home'
import Users from './userpage'
const Header = () =>  {
   return (
    <div>
         <nav>
          <ul class="list">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        </div>
  );

}
export default Header;
