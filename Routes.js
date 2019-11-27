import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css';
import asyncComponent from './AsyncComponent'

import 'tachyons'


const Home = asyncComponent(() =>
    import('./home').then(module => module.default)
)

const AddUser = asyncComponent(() =>
    import('./adduser').then(module => module.default)
)

const About = asyncComponent(() =>
    import('./about').then(module => module.default)
)

const Users  = asyncComponent(() =>
    import('./userpage').then(module => module.default)
)

export default function Routes() {
  return (
    
      <div class="h-auto pa2 ma2">
       <Switch>
          <Route path="/about" component={About} />
            
          <Route path="/users" component={Users} />
          
          <Route path="/home" component={Home} />
         
           <Route path="/add" component={AddUser} />
         
        </Switch>
      </div>
    
  );
}
