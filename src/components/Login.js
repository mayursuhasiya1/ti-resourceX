import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";

import { Link, useNavigate, useLocation } from "react-router-dom";
// authcontext api
import useAuth from "../hooks/useAuth";

import "../css/Home.css";
import "../css/Login.css";

// login url
const LOGIN_URL = "/sign-in";

// login function
const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // variables
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  //refresh
  useEffect(() => {}, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: email, password: password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.accessToken;
      //   const roles = response?.data?.roles;

      setAuth({ email, password, accessToken });

      // console.log(accessToken);

      setEmail("");
      setPassword("");
      // replaces success message
      navigate(from, { replace: true });
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
    <div>
      {/* header */}

      <Header />

      {/* logo and box */}

      <div className="box">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2 className="text-2xl"> Sign in</h2>

          <div class="inputBox">
            <input
              type="email"
              id="email"
              value={email}
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>User Email</span>
            <i></i>
          </div>
          <div class="inputBox">
            <input
              type="password"
              id="pwd"
              value={password}
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>
          <div class="links">
            <a href="#">Forgot Password ?</a>
            <a href="./signup">Signup</a>
          </div>

          <input className="bg-blue-500" type="submit" value="Login" />

          <div className="google_logo">
            <a href="#">
              Sign in with
              <img src="google.png" alt="" />
            </a>
          </div>
        </form>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Login;
