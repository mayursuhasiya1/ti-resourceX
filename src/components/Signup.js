import React from "react";
import "../css/Signup.css";
import { useState, useRef, useEffect } from "react";
import axios from "../api/axios";
import Header from "./Header";
import Footer from "./Footer";
// react-form
import { useForm } from "react-hook-form";

// all regex
const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const mobRegex = /^[6-9]\d{9}$/;

const Signup = () => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm();
  const REGISTER_URL = "/sign-up";

  // fields

  const userRef = useRef(); //to set focus on the user input when the components load
  const errRef = useRef(); //for the focus on error message
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState();
  const [designation, setDesignation] = useState();
  const [primaryMobile, setPrimaryMobile] = useState("");
  const [alternativeMobile, setAlternativeMobile] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [roleId, setRoleId] = useState();
  const [userRegistered, setUserRegistered] = useState(false);
  // validation
  const [validPwd, setValidPwd] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validMob, setValidMob] = useState(false);
  const [validAlternateMob, setValidAlternateMob] = useState(false);

  // State events
  useEffect(() => {
    //for setting the focus when the componenet loads
    userRef.current.focus();
  }, []); //so set the focus on username input

  // for name
  useEffect(() => {
    const v1 = nameRegex.test(firstName);
    const v2 = nameRegex.test(middleName);
    const v3 = nameRegex.test(lastName);
    if (!v1 || !v2 || !v3) {
      setValidName(false);
    } else {
      setValidName(true);
    }
  }, [firstName, middleName, lastName]);

  useEffect(() => {
    // to check pass valid or not
    setValidPwd(pwdRegex.test(password));
    // check pass and confPass matches or not
    const match = password === confirmPassword;
    if (password.length >= 8) console.log(password);
    if (confirmPassword.length >= 8) console.log(password);

    setValidMatch(match);
  }, [password, confirmPassword]);

  useEffect(() => {
    // to check mob valid or not
    setValidMob(mobRegex.test(primaryMobile));
    setValidAlternateMob(mobRegex.test(alternativeMobile));
  }, [primaryMobile, alternativeMobile]);

  useEffect(() => {
    setErrMsg("");
  }, [
    firstName,
    lastName,
    middleName,
    gender,
    designation,
    primaryMobile,
    alternativeMobile,
    email,
    password,
    profileImage,
    confirmPassword,
    roleId,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 =
      nameRegex.test(firstName) &&
      nameRegex.test(middleName) &&
      nameRegex.test(lastName);
    const v2 = pwdRegex.test(password);

    if (!v1 || !v2) {
      setErrMsg("Name or password");
      return;
    }
    try {
      const result = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          firstName,
          lastName,
          middleName,
          gender,
          designation,
          primaryMobile,
          alternativeMobile,
          email,
          profileImage,
          password,
          confirmPassword,
          roleId,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      setSuccess(true);
      setPassword("");

      console.warn("result", result.status);
      if (result.status == "400") {
        setUserRegistered(true);
      }
    } catch (err) {
      if (!err?.result) {
        setErrMsg("No server response");
      } else if (err.result?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }

      console.log(errMsg);

      errRef.current.focus();
    }
  };

  // handle image
  const handleChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(typeof base64);

    setProfileImage(base64);
    console.log(profileImage);
  };

  // convert into base64
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    // <!-- component -->

    <>
      {success ? (
        <section>
          <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                {/* <h1 class="mb-8 text-3xl text-center">
                  Successfully Signed up!
                </h1>

                <a href="./login">
                  <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 ml-28 hover:border-blue-500 rounded">
                    Log in
                  </button>
                </a> */}
                {/* for validation */}
                {userRegistered == true ? (
                  <h1 class="mb-8 text-3xl text-center">
                    You are Already Registered with this Email
                    <a href="./login">
                      <button class="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 ml-2 mt-2 hover:border-blue-500 rounded">
                        Log In
                      </button>
                    </a>
                  </h1>
                ) : (
                  <h1 class="mb-8 text-3xl text-center">
                    Successfully Signed up!
                    <a href="./login">
                      <button class="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 ml-2 mt-2 hover:border-blue-500 rounded">
                        Log in
                      </button>
                    </a>
                  </h1>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          {/* header */}
          {/* <Header/> */}

          <p
            ref={errRef} //this will display the error message if any
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <div className="mb-6">
            <form onSubmit={handleSubmit} className="h-0 bg-opacity-0 bg-white">
              <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                  <div className="bg-gray-400 px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                      type="text"
                      autoComplete="off"
                      id="firstName"
                      ref={userRef}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      name="firstname"
                      placeholder="First Name"
                    />
                    {/* middle name */}
                    {/* <p className="asterisk_input">  </p>  */}
                    <input
                      type="text"
                      id="middleName"
                      autoComplete="off"
                      required
                      onChange={(e) => setMiddleName(e.target.value)}
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      name="lastname"
                      placeholder="Middle Name"
                    />
                    <input
                      type="text"
                      id="lastName"
                      autoComplete="off"
                      required
                      onChange={(e) => setLastName(e.target.value)}
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      name="lastname"
                      placeholder="Last Name"
                    />
                    <input
                      type="email"
                      id="email"
                      autoComplete="off"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      name="email"
                      placeholder="Email"
                    />

                    {/*gender */}
                    {typeof gender == "undefined" ? (
                      <p className="text-red-600">Select Gender</p>
                    ) : (
                      " "
                    )}
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-select appearance-none
        
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4"
                      aria-label="Default select example"
                      id="gender"
                    >
                      <option disabled selected>
                        Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>

                    {/* role id */}
                    {typeof roleId == "undefined" ? (
                      <p className="text-red-600">Select Role ID</p>
                    ) : (
                      " "
                    )}
                    <select
                      required
                      value={roleId}
                      onChange={(e) => setRoleId(e.target.value)}
                      className="form-select appearance-none    
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4"
                      aria-label="Default select example"
                      id="roleId"
                    >
                      <option disabled selected>
                        Role ID
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    {/* designation */}
                    {typeof designation == "undefined" ? (
                      <p className="text-red-600">Select Designation</p>
                    ) : (
                      " "
                    )}

                    <select
                      onChange={(e) => setDesignation(e.target.value)}
                      className="form-select appearance-none
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4"
                      aria-label="Default select example"
                      id="designation"
                    >
                      <option disabled selected>
                        Designation
                      </option>
                      <option value="Developer">Developer</option>
                      <option value="Ui developer">UI Develooper</option>
                      <option value="manager">Manager</option>
                    </select>

                    {/* mobile number */}
                    {primaryMobile == "" ? (
                      <p className="text-red-600">Enter Mobile Number</p>
                    ) : validMob ? (
                      " "
                    ) : (
                      <p className="text-red-600">Enter Valid Mobile Number</p>
                    )}

                    <input
                      type="tel"
                      required
                      autoComplete="off"
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
                      onChange={(e) => setPrimaryMobile(e.target.value)}
                    />

                    {/* alternative mobile number */}
                    {alternativeMobile == "" ? (
                      <p className="text-black">
                        Enter Alternative Mobile Number
                      </p>
                    ) : validAlternateMob ? (
                      " "
                    ) : (
                      <p className="text-red">
                        Enter Valid Alternative Mobile Number
                      </p>
                    )}
                    <input
                      type="tel"
                      autoComplete="off"
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
                      onChange={(e) => setAlternativeMobile(e.target.value)}
                    />

                    {/* image */}
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      for="file_input"
                    >
                      Upload Photo
                    </label>
                    <input
                      class="block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="profileImage"
                      type="file"
                      onChange={(e) => handleChange(e)}
                    />
                    <br />

                    {/* password  */}
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="off"
                      required
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      name="password"
                      placeholder="Password"
                    />
                    {/*  */}
                    <input
                      type="password"
                      required
                      autoComplete="off"
                      id="confirmPassword"
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      name="confirm_password"
                      placeholder="Confirm Password"
                    />
                    {/* error message */}

                    <b>
                      {/* for name */}

                      {firstName.length > 0 &&
                      middleName.length > 0 &&
                      lastName.length > 0 ? (
                        validName ? (
                          <p className="text-green-800">1. Valid Name</p>
                        ) : (
                          <p className="text-red-500">1. Invalid Name</p>
                        )
                      ) : (
                        " "
                      )}
                      {/* for validation */}
                      {password.length > 0 && confirmPassword.length > 0 ? (
                        validPwd ? (
                          <p className="text-green-800">2. Valid Password</p>
                        ) : (
                          <p className="text-red-500">2. Invalid Password</p>
                        )
                      ) : (
                        " "
                      )}
                      {/* for match */}
                      {password.length > 0 && confirmPassword.length > 0 ? (
                        validMatch ? (
                          <p className="text-green-800">3. Password Matched</p>
                        ) : (
                          <p className="text-red-500">
                            3. Password Not Matched
                          </p>
                        )
                      ) : (
                        " "
                      )}
                    </b>
                    <br />
                    {/* submit button */}
                    <button
                      type="submit"
                      disabled={
                        (alternativeMobile != "" && !validAlternateMob) ||
                        !validMob ||
                        typeof designation == "undefined" ||
                        typeof gender == "undefined" ||
                        typeof roleId == "undefined" ||
                        !validName ||
                        !validPwd ||
                        !validMatch
                          ? true
                          : false
                      }
                      className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-blue-800 focus:outline-none my-1"
                    >
                      Create Account
                    </button>
                    <div className="text-center text-sm text-grey-dark mt-4">
                      By signing up, you agree to the
                      <a
                        className="no-underline border-b border-grey-dark text-grey-dark"
                        href="#"
                      >
                        Terms of Service
                      </a>{" "}
                      and
                      <a
                        className="no-underline border-b border-grey-dark text-grey-dark"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </div>
                    <div className="text-grey-dark mt-6 ml-6">
                      Already have an account?
                      <a
                        className="no-underline border-b border-blue text-blue"
                        href="../"
                      >
                        Log in
                      </a>
                      .
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
  );
};

export default Signup;
