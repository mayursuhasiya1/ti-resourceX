import React from 'react'
import { useState,useRef,useEffect } from 'react';
import axios from "../api/axios";



import AxiosError from "react-axios"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faInfoCircle,faLeaf,faTimes } from "@fortawesome/free-solid-svg-icons";

// const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {


// variables
const userRef = useRef();
const errRef = useRef(); 

const [user, setUser] = useState("");
const [pwd, setPwd] = useState("");
const [mpwd, setMpwd] = useState("");
const [errMsg, setErrMsg] = useState("");
const [success, setSuccess] = useState(false);
// const [validMatch,setValidMatch] = useState(false);


// functions
// State events
useEffect(() => {
    userRef.current.focus();
  }, []);
  
useEffect(() => {
    // const checkuser = USER_REGEX.test(user)
    // setValidName(checkuser);
    if(user.length >=4)
    {
        console.log("working")
    }

}, [user]);
  
  useEffect(() => {
    
    // if( mpwd.length>=8) {
    //     console.log("working match pasword")
    // }
    
    if(pwd.length>=8 && mpwd.length>=8)
    {
        // console.log(pwd)
        // console.log(mpwd)
        if(pwd === mpwd)
        {
            console.log("true: working")
        }
    }
  }, [pwd, mpwd]);



  
// other imports
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      REGISTER_URL,
      JSON.stringify({ user, pwd }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    setSuccess(true);
    //clear state and controlled inputs
    setUser("");
    setPwd("");
   
  } catch (err) {
    if (!err?.response) {
      setErrMsg("No Server Response");
    } else if (err.response?.status === 409) {
      setErrMsg("Username Taken");
    } else {
      setErrMsg("Registration Failed");
    }
    errRef.current.focus();
  }
};

  return (
    
    <>
      <section>
      <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
          {success}
        </p>


        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="bg-gray-400 bg-opacity-0">
        <label htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <p
            id="uidnote"
           
          >
            
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
          <br />

          {/* password */}
          <label htmlFor="password">
            Password:
            
          </label>
          <input
            type="password"
            name ="password"
            id="password"
            ref={userRef}
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required

          />
          <p
            id="pwdnote"
            
          >
           
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a
            number and a special character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">
              !
            </span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>

          <br />
          <label htmlFor="confirm_pwd">
            Confirm Password:
           
            
          </label>
          <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMpwd(e.target.value)}
            value={mpwd}
            required

          />
          <p
            id="confirmnote"
           
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
           
          >
            Sign Up
          </button>
          
        </form>
        <p>
          Already registered?
          <br />
          <span className="line">
            {/*put router link here*/}
            {/* <a href="#">Sign In</a> */}
          </span>
        </p>
      </section>
      
    </>
    
  )
}

export default Register