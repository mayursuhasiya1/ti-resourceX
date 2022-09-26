import { useEffect, useState } from "react";
import './Login.css'


const Login = () => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  return (
<div>

 <div className="main">

	{/* left portion */}
   <div className="left-part">
	 <div className="left-top">
	    <h1 className="heading text-3xl	">Ti-ResourceX</h1>
	 </div>

	 <div>
	  <p className="popout">
	  <span>Y</span>
	  <span>O</span>
	  <span>U</span>
	  <span>R</span> <br />
	  <span>O</span>
	  <span>N</span>
	  <span>E</span><br />
	  <span>S</span>
	  <span>T</span>
	  <span>E</span>
	  <span>P</span> <br />
	  <span>S</span>
	  <span>O</span>
	  <span>L</span>
	  <span>U</span>
	  <span>T</span>
	  <span>I</span>
	  <span>O</span>
	  <span>N</span> <br /> 
	  <span>F</span>
	  <span>O</span>
	  <span>R</span> <br />
	  <span>E</span>
	  <span>M</span>
	  <span>P</span>
	  <span>L</span>
	  <span>O</span>
	  <span>Y</span>
	  <span>E</span>
	  <span>E</span> <br />
	  <span>M</span>
	  <span>A</span>
	  <span>N</span>
	  <span>A</span>
	  <span>G</span>
	  <span>E</span>
	  <span>M</span>
	  <span>E</span>
	  <span>N</span>
	  <span>T</span>
	</p>
	</div>

         {/* Ti logo */}
     <div className="ti-logo  ">
	    <a href="https://technoidentity.com/"><img src="tiLogoNew.png" alt="Technoidentity" className="mt-10"/></a>
	 </div>
   </div>




   {/* right portion */}
     {/* sign in box */}
  <div className="right-part">

{/*box */}
<div class="box">
 <form autocomplete="off" >
	 <h2 className=" py-3 text-2xl"> Sign in</h2>
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
		 <a href="#">Signup</a>
	 </div>
	 <input className="bg-blue-500" type="submit" value="Login"/>
	 
	 <div className="google_logo"> 
	   <a href="#">Sign in with<img src="google.png" alt="" /></a>
	 </div> 
   </form>
 
   </div>

  </div>
{/* signin portion end*/}
 </div>
{/* footer */}
<footer></footer>
 
        
</div>
  );
}


export default Login;