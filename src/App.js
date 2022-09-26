
// import  from './landingPage'
import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from "./NotFound"
import Mobile from './Mobile';
import Home from './Home';

import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import React, { useState } from 'react';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


function App() {
  const token = getToken();

  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/mobile">
            <Mobile />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;