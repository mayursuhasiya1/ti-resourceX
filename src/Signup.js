import React from 'react'
import './Signup.css'
import Footer from './Footer'
import Header from './Header'
import { useState, useRef } from 'react'
import axios from "./api/axios";


const REGISTER_URL = "/Singup";


const Signup = () => {

// handle submit function



const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    
    // fields
const userRef = useRef();
const errRef = useRef();
const [fname, setFname] = useState("");
const [mname, setMname] = useState(false);
const [lname, setLname] = useState(false);
const [email, setEmail] = useState(false);
const [gender, setGender] = useState("");
const [designation, setDesignation] = useState(false);
const [mobnumber, setMobnumber] = useState(false);
const [altermobnumber, setAltermobnumber] = useState("");
const [photo, setPhoto] = useState(false);
const [pwd, setPwd] = useState('');
const [errMsg, setErrMsg] = useState("");
const [success, setSuccess] = useState(false);

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const v1 = USER_REGEX.test(user);
        // const v2 = PWD_REGEX.test(pwd);
        // if (!v1 || !v2) {
        //   setErrMsg("Invalid Entry");
        //   return;
        // }
      
        try {
          const response = await axios.post(
            REGISTER_URL,
            JSON.stringify({ email, pwd }),
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );
          setSuccess(true);
          //clear state and controlled inputs
          setEmail("");
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
    // <!-- component -->

    <div>

{/* header */}

 {/* <Header/> */}

<div className='mb-6'>

<form action="" onSubmit={handleSubmit} className='h-0 bg-opacity-0 bg-white'>
 <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-gray-400 px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="First Name" 
                        ref={userRef} />


                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Middle Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Last Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

{/* male or female */}
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
      <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
        Male
      </label>
    
    <br />
  
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
      <label class="form-check-label inline-block text-gray-800 mb-4" for="flexRadioDefault2">
        Female
      </label>
      
    

{/*  */}
<br />
<label for="exampleTel0" class="form-label inline-block mb-2 text-gray-700"
      >Designation</label
    >
<select class="form-select appearance-none
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
    </select>

    {/* mobile number */}

    <input
      type="tel"
      class="
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
      id="exampleTel0"
      placeholder="Mobile number"
    />

    {/* alternative mobile number */}

    <input
      type="tel"
      class="
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
      id="exampleTel0"
      placeholder="Alternative Mobile number"
    />
{/* image */}
<label for="formFile" class="form-label inline-block mb-2 text-gray-700">Add Photo</label>
    <input class="form-control
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
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4" type="file" id="formFile"></input>
{/* password  */}

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-black text-white hover:bg-yellow focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                <div class="text-grey-dark mt-6 ml-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../">
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
        
        
  )
}

export default Signup