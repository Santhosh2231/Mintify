import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from 'axios';
import logo from "../assets/logo.jpeg";
function Login() {
    const Navigate = useNavigate();
      const [logIn,setLogin]=useState(-1)
      const [user,setUser]=useState({
        email: '',
        password:'',
      })
      const [userData,setUserData]=useState()
      function update(e) {
        const newUser = {...user}
        newUser[e.target.id]=e.target.value
        setUser(newUser)
      }
      function signIn(e) {
        e.preventDefault()
        axios.post("http://localhost:3001/api/Auth/login/", {
          email:user.email,
          password:user.password
        })
      .then(res => {setUserData(res);
      localStorage.setItem("user",JSON.stringify(res));
      Navigate("/home");
      })
      }
  function changeTxt() {
      user.email=''
      user.password=''

  }
     
  return (
      <div className="MainLogin0">
      <form onSubmit={(e)=> signIn(e)}>
        <div id="Signup0">
          <img src={logo} alt="logo" className="lgo0" height="20px"/>
          <h2 className="logintitle0">Login to Mintify</h2>
          <p className="subhead">Welcome back! Please enter your details.</p>
          <p className="fieldhead">Email</p>
          <input
            type="email"
            name="email1"
            id="email"
            onChange={(e) => update(e)} 
            value={user.email}
            placeholder="Enter your email"
            className="inpBox"
          />
          <p className="fieldhead">Password</p>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => update(e)} 
            value={user.password}
            placeholder="Password"
            className="inpBox pass"
          />
          <p></p>

          <button type="submit" className="subBut">
            Sign in
          </button>
          <p className="refLink">
            Don't have an account?
            <a href="/signup" className="pBut">Sign up</a>
            
          </p>
        </div>
      </form>
    </div>

  )
}

export default Login;
