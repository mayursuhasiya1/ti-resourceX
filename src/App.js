
// import  from './landingPage'
import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from "./NotFound"
import Home from './Home';
import Signup from './Signup';
import Register from './Register';


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
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/register">
            <Register />
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