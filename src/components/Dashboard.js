import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Dashboard = () => {
  
  // setting authorisation
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    setAuth({});
    navigate('/login');
  }
  
  return (

    // authorisation
  
    <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">

                    <h1 className="mb-6 text-3xl text-center">Dashboard</h1> 
                    <Link className=' text-xl text-center ml-10 bg-blue-300' to="/admin">Go to the Admin page</Link> <br />

                    <button onClick={logout} class="mt-6 ml-28 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Logout
</button>

                    </div>
                </div>

            </div>
  )
}

export default Dashboard