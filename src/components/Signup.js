import React from 'react'
import '../css/Signup.css'
import Footer from './Footer'
import Header from './Header'
import { useState, useRef, useEffect } from 'react'
//import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "../api/axios";

const Signup = () => {

//const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
//const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/sign-up";
    
    // fields

const userRef = useRef();     //to set focus on the user input when the components load
const errRef = useRef();      //for the focus on error message 
const [firstName, setfirstName] = useState("");
const [fnameFocus,setfnameFocus] = useState(false);
const [middleName, setmiddleName] = useState("");
const [mnameFocus,setmnameFocus] = useState(false);
const [lastName, setlastName] = useState("");
const [lnameFocus,setlnameFocus] = useState(false);
const [email, setemail] = useState("");
const [emailFocus,setemailFocus] = useState(false);
const [gender, setgender] = useState("");
//const [genderFocus,setgenderFocus] = useState(false);
const [designation, setdesignation] = useState("");
const [desFocus,setdesfocus] = useState(false);
const [primaryMobile, setprimaryMobile] = useState("");
const [pmobFocus,setpmobFocus] = useState(false);
const [alternativeMobile, setalternativeMobile] = useState("");
const [altMFocus,setaltMFocus] = useState(false);
const [profileImage, setprofileImage] = useState("");
const [imgFocus,setimgfocus] = useState(false);
const [password, setpassword] = useState("");
const [validPwd, setValidPwd] = useState(false);
const [pwdFocus, setPwdFocus] = useState(false);
const [confirmPassword, setconfirmPassword] = useState("");
const [validMatch, setValidMatch] = useState(false);
const [matchFocus, setMatchFocus] = useState(false);
const [errMsg, setErrMsg] = useState("");
const [success, setSuccess] = useState(false);
const [roleId, setroleId] = useState();


// State events
useEffect(() => {                       //for setting the focus when the componenet loads
    userRef.current.focus();
  }, []);                                //so set the focus on username input
  
 
  
  useEffect(() => {
    //const result = PWD_REGEX.test(password);
    //console.log(result);
   // console.log(password);
    setValidPwd(password);
    const match = password === confirmPassword;
    setValidMatch(match);
  }, [password, confirmPassword]);
  
  useEffect(()  => {
    setErrMsg("");
  }, [firstName,lastName,middleName,gender,designation,primaryMobile,alternativeMobile,email, password,profileImage, confirmPassword,roleId]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
   
setSuccess(true);

    try {
        const result = await fetch("http://103.242.116.207:9000/api/auth/sign-up",{
            method: 'POST',
            body:JSON.stringify({firstName,lastName,middleName,gender,designation,primaryMobile,alternativeMobile,email,profileImage, password, confirmPassword,roleId}),

            headers: { 
                "Content-Type": "application/json" ,
            "Accept":"application/json"
            }
        })
          
        console.warn("result",result)
        setSuccess(true);
        

} 

catch (err) {
  if (!err?.result) {
    setErrMsg("No server response");
  } else if (err.result?.status === 409) {
    setErrMsg("Username Taken");
  } else {
    setErrMsg("Registration Failed");
  }
  errRef.current.focus();
}
};

  return (
    // <!-- component -->

    <>
    {success ? (
        <section>

            <div class="bg-grey-lighter min-h-screen flex flex-col">
                            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">

                                <h1 class="mb-8 text-3xl text-center">Successfully Signed up!</h1> 

                                <a href="./login">
                                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 ml-28 hover:border-blue-500 rounded">
                                Log in
                                </button>
                                </a>
                               
                                </div>
                
                            
                            </div>
                        </div>
        </section>
    ) : (

    <div>
{/* header */}
 {/* <Header/> */}

    <p
          ref={errRef}                                        //this will display the error message if any
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
    </p>

<div className='mb-6'>

<form  onSubmit={handleSubmit} className='h-0 bg-opacity-0 bg-white'>
 <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-gray-400 px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    
                   
                    <input 
                        type="text"
                        id="firstName"
                        ref={userRef} 
                        onChange={(e) => setfirstName(e.target.value)}
                        required
                        onFocus={() => setfnameFocus(true)}
                        onBlur={() => setfnameFocus(false)}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="firstname"
                        placeholder="First Name" />

                    <input 
                        type="text"
                        id="middleName"
                        onChange={(e) => setmiddleName(e.target.value)}
                        onFocus={() => setmnameFocus(true)}
                        onBlur={() => setmnameFocus(false)}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="middlename"
                        placeholder="Middle Name" />

                    <input 
                        type="text"
                        id='lastName'                       
                        required
                        onChange={(e) => setlastName(e.target.value)}
                        onFocus={() => setlnameFocus(true)}
                        onBlur={() => setlnameFocus(false)}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="lastname"
                        placeholder="Last Name" />

                    <input 
                        type="email"
                        id='email'                       
                        required
                        onChange={(e) => setemail(e.target.value)}
                        onFocus={() => setemailFocus(true)}
                        onBlur={() => setemailFocus(false)}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

{/*gender */}
     

<input
                        type="text"
                        id='gender'
                        required
                        onChange={(e) => setgender(e.target.value)}
                        name='gender'
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder='Gender'  />


{/* <p>Gender:</p>
  <input type="radio" id="Male" name="gender" value="Male"/>
  <label htmlFor="Male">Male</label>
  <input type="radio" id="Female" name="gender" value="Female"/>
  <label htmlFor="Female">Female</label>    */}

{/*roleId*/}

  <input
                        type="text"
                        id='roleId'
                        required
                        onChange={(e) => setroleId(e.target.value)}
                        name='roleId'
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder='RoleId'  />


{/* designation */}
<br />


<input
                        type="text"
                        id='designation'
                        required
                        onChange={(e) => setdesignation(e.target.value)}
                        name='designation'
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder='Designation'  />




{/*<label htmlFor="designation" 
required
onChange={(e) => setdesignation(e.target.value)}
id='designation'                      
onFocus={() => setdesfocus(true)}
onBlur={() => setdesfocus(false)}
className="form-label inline-block mb-2 text-gray-700"
      >Designation</label
    >
   <select className="form-select appearance-none
id='designation'  
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4" aria-label="Default select example">
        <option selected>Developer</option>
        <option value="1">UI Develooper</option>
        <option value="2">Manager</option>
        <option value="3">Tester</option>
    </select>  */}

    {/* mobile number */}

    <input
      type="tel"
      required
      onChange={(e) => setprimaryMobile(e.target.value)}
      onFocus={() => setpmobFocus(true)}
        onBlur={() => setpmobFocus(false)}
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
       mb-4"
      id="primaryMobile"
      placeholder="Mobile number"
    />

    {/* alternative mobile number */}

    <input
      type="tel"
      onChange={(e) => setalternativeMobile(e.target.value)}
      onFocus={() => setaltMFocus(true)}
        onBlur={() => setaltMFocus(false)}
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
       mb-4"
      id="alternativeMobile"
      placeholder="Alternative Mobile number"
    />
{/* image */}
<label htmlFor="profileImage" className="form-label inline-block mb-2 text-gray-700">Add Photo</label>
    <input className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4" 
    type="text" 
    onChange={(e) => setprofileImage(e.target.value)}
    onFocus={() => setimgfocus(true)}
    onBlur={() => setimgfocus(false)}
    id="profileImage"></input>
{/* password  */}
        

                    <input 
                        type="password"
                        id="password"
                        onChange={(e) => setpassword(e.target.value)}
                    //    aria-invalid={validPwd ? "false" : "true"}
                     //   aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        required
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"

                        placeholder="Password" />

                        {/*    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> 
                            <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> 
                            <span aria-label="percent">%</span>
                        </p> */}


                    <input 
                        type="password"
                        required
                        id="confirmPassword"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        onChange={(e) => setconfirmPassword(e.target.value)}
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    //    aria-invalid={validMatch ? "false" : "true"}
                    //    aria-describedby="confirmnote"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                     {/*   <p
                                    id="confirmnote"
                                    className={matchFocus && !validMatch? "instructions": "offscreen" } >
                                     <FontAwesomeIcon icon={faInfoCircle} />
                                    Must match the first password input field.
                                </p>  */}

                    <button
                        type="submit"
                     //</div>   disabled={
                       //     !validPwd || !validMatch ? true: false }
                        className="w-full text-center py-3 rounded bg-black text-white hover:bg-yellow focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                <div className="text-grey-dark mt-6 ml-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../">
                        Log in
                    </a>.
                </div>
                </div>

                
            </div>
        </div>
 </form>



</div>


        {/* <Footer/> */}
    </div>
         )}
         </>
        
  )
}

export default Signup