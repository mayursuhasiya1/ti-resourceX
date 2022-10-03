import React from 'react'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// authcontext api
import useAuth from '../hooks/useAuth';

// import './Home.css';

const Home = () => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const { setAuth } = useAuth();

  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    setAuth({});
    navigate('/login');
}

  return (
   

            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">

                    <h1 class="mb-8 text-3xl text-center">Home page</h1> 
                    
                                <button class="mb-6 ml-28 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={logout}>
                                    Logout
                                </button>
                                
                    </div>
                </div>
                

            </div>
  
         
   
  )
}

export default Home