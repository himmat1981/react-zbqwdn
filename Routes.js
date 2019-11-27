import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css';
import asyncComponent from './AsyncComponent'
import About from './about'
import Home from './home'
import Users from './userpage'
import 'tachyons'
import AddUser from './adduser'

const Home = asyncComponent(() =>
    import('./home').then(module => module.default)
)

const Maps = asyncComponent(() =>
    import('./adduser').then(module => module.default)
)

const Blog = asyncComponent(() =>
    import('./userpage').then(module => module.default)
)

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
          <Route path="/home">
            <Home />
          </Route>
           <Route path="/add">
            <AddUser />
          </Route>
        </Switch>
      </div>
    
  );
}
