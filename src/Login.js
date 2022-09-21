import { useEffect, useState } from "react";
import './Login.css'


const Login = () => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  return (
<div>
        
  <div className="logo">
     <a href="https://technoidentity.com/"><img src="tiLogoNew.png" alt="Technoidentity"/></a>
  </div>
    
	{/* sign in box */}
  <div className="signin-portion">

       {/*box */}
    <div class="box">
		<form autocomplete="off" >
			<h2>Sign in</h2>
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
			<input type="submit" value="Login"/>
			
			<div className="google_logo"> 
			  <a href="">Sign in with<img src="google.png" alt="" /></a>
			</div>
			
		</form>
		
	</div>

  </div>
  {/* signin portion end*/}

</div>
  );
}


export default Login;