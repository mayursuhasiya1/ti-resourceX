import React from 'react'
import Footer from './Footer';
import Header from './Header'

import { useState } from 'react';

import './Home.css';
import './Login.css';

const Home = () => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

  return (
    <div >
      
     {/* header */}

  <Header/>

{/* logo and box */}


<div className="box">
    <form autocomplete="off" >
	 <h2 className="text-2xl"> Sign in</h2>
	 
     <div class="inputBox">
         <input type="text" required="required" onChange={e => setUserName(e.target.value)}/>
		 <span>Userame</span>
		 <i></i>
	 </div>
	 <div class="inputBox">
         <input type="password" required="required" onChange={e => setPassword(e.target.value)}/>
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

export default Home