import React from "react";
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
import 'tachyons'

export default function Routes() {
  return (
    
      <div class="h-auto pa2 ma2">
       <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </div>
    
  );
}
