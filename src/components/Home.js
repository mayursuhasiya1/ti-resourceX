import React from 'react'

import { useState } from 'react';

// import './Home.css';

const Home = () => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

  return (
   

            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">

                    <h1 class="mb-8 text-3xl text-center">Home page</h1> 
                    <a href="./login">
                                <button class="bg-blue-500 ml-28 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 ml-16 hover:border-blue-500 rounded">
                                Log in
                                </button>
                                </a>
                    </div>
                </div>
                

            </div>
  
         
   
  )
}

export default Home