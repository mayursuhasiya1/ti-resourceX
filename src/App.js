
// import  from './landingPage'
import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from "./NotFound"
import Home from './Home';
import Signup from './Signup';
import Register from './Register';
import Unauthorized from './Unauthorized';
import RequireAuth from './RequireAuth';

import {  Route, Routes  } from 'react-router-dom';
import React, { useState } from 'react';
import Layout from './Layout';



function App() {
  

  return (
    
       <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
             <Route path="login" element={<Login/>}/>
             {/* <Route path="register" element={<Register/>}/> */}
             <Route path="signup" element={<Signup/>}/>
             <Route path="unauthorized" element={<Unauthorized/>}/>


          {/* we want to protecte this routes */}
          {/* it will require authorisation to access the dashboard and other authorised pages */}
          
          {/* admin role */}
          <Route element={<RequireAuth allowedRoles = {[]}/>}>
             <Route path="/" element={<Dashboard/>}/>
          </Route>

          {/* admin */}
          <Route element={<RequireAuth allowedRoles = {[]}/>}>
             <Route path='admin'/>
          </Route>

          {/* developer */}
          <Route element={<RequireAuth allowedRoles = {[]}/>}>
             <Route path='developer'/>
          </Route>


          {/* not found route: 404*/}
          <Route path="*" element={<NotFound/>}/>
        
        </Route>

       </Routes>
  );
}

export default App;