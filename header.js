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
    <header className='bg tc pv4 pv5-ns'>
     
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       
      </div>
   
   </header>
  );

}
export default Header;
