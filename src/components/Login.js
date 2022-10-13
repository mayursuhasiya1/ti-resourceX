import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import { axiosPrivate } from "../api/axios";

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

  //
  const controller = new AbortController();

  // variables
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSucess] = useState(true);

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

      // storing token in local storage
      window.localStorage.setItem("token", JSON.stringify(response?.data));
      window.localStorage.setItem("isLoggedIn", true);

      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.accessToken;
      //   const roles = response?.data?.roles;

      setAuth({ email, password, accessToken });

      // const res1 = await axiosPrivate.get("/users/1", {
      //   signal: controller.signal,
      // });

      // console.log(res1.data);

      setEmail("");
      setPassword("");

      // replaces success message
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);

      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Invalid Email or password");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  // const togglePersist = () => {
  //   setPersist((prev) => !prev);
  // };

  // useEffect(() => {}, [persist]);

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

          <h1 className="text-red-500">{errMsg}</h1>
          <input className="bg-blue-500" type="submit" value="Login" />

          <div className="google-btn ml-32">
            <div className="google-icon-wrapper mr-2">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className="btn-text pb-2">
              <b className="">Sign in with google</b>
            </p>
          </div>
        </form>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Login;
