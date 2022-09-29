import React from 'react'
import Footer from './Footer';
import Header from './Header'
import { useRef, useState, useEffect, useContext } from "react";
import axios from './api/axios';

// authcontext api
import authContext from "./context/AuthProvider";


import './Home.css';
import './Login.css';
import AuthContext from './context/AuthProvider';


// login url
const LOGIN_URL = "/sign-in";


// login function
const Login = () => {

  const { setAuth } = useContext(AuthContext);
	// variables
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);


  //refresh
  useEffect( () => {
    
  }, []);

  useEffect(() => {
    setErrMsg("");
	// console.log(user);
	// console.log(pwd);
  }, [email, password]);


    // handle submit
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

		
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: email, password:password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

	  console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;

	  setAuth({ email, password, accessToken });

      setEmail("");
      setPassword("");
      setSuccess(true);

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div >
      
     {/* header */}

  <Header/>

{/* logo and box */}


<div className="box">
    <form autocomplete="off" onSubmit={handleSubmit} >
	 <h2 className="text-2xl"> Sign in</h2>
	 
     <div class="inputBox">
         <input type="email" id='email' value={email} required="required" onChange={e => setEmail(e.target.value)}/>
		 <span>User Email</span>
		 <i></i>
	 </div>
	 <div class="inputBox">
         <input type="password" id='pwd' value={password} required="required" onChange={e => setPassword(e.target.value)}/>
		 <span>Password</span>
		 <i></i>
	 </div>
	 <div class="links">
		 <a href="#">Forgot Password ?</a>
		 <a href="./signup">Signup</a>
	 </div>

	 <input className="bg-blue-500" type="submit" value="Login"/>
	 
	 <div className="google_logo"> 
	   <a href="#">Sign in with<img src="google.png" alt="" /></a>
	 </div> 
   </form>
</div>




{/* footer */}
     <Footer/>
    </div>
  )
}

export default Login