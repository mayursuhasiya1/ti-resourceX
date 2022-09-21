
// import  from './landingPage'
import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from "./NotFound"
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
        <Route path="/">
            <Login />
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