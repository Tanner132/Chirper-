import React, { Component } from 'react';
import Feed from './Components/Feed';
import NavBar from './Components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Sign_Up from './Components/Sign_Up';
import Login from './Components/Login';

function App () {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          <Route path="/" exact component={Sign_Up}/>
          <Route path="/Login" exact component={Login}/>
          <Route path="/Feed" exact component={Feed}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
