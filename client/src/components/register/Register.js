import React,{useState} from 'react'
import axios from 'axios';
import './Register.css'
import logo from "../../assets/logo.jpeg";
import { Navigate, useNavigate } from 'react-router-dom';
function Register() {
    const Navigate = useNavigate();
      const [logIn,setLogin]=useState(-1)
      const [user,setUser]=useState({
        fname: '',
        lname: '',
        email: '',
        password:'',
        mobile:'',
        pancard:''
      })
      function update(e) {
        const newUser = {...user}
        newUser[e.target.id]=e.target.value
        setUser(newUser)
        console.log(newUser)
      }
      function signUp(e) {
        e.preventDefault()
        axios.post("http://localhost:3001/api/Auth/register",
            {
            username:user.fname+user.lname,
            email: user.email,
            password: user.password ,
            mobile:user.mobile,
            pancard:user.pancard 
          }
            ).then(res => {console.log(res);
            Navigate("/")})
        }
      
  function changeTxt() {
      user.fname=''
      user.lname=''
      user.email=''
      user.mobile=''
      user.pancard=''
      user.password=''

  }
  return (
    <div className="MainLogin1">
      <form onSubmit={(e)=> signUp(e)}>
        <div id="Signup1">
          {/* <img src={logo} alt="logo" className="lgo1" /> */}
          <h1 className="logintitle1">Sign up to Mintify</h1>
          <p className="subhead1">Please fill the form below to continue</p>
          <p className="fieldhead">First Name</p>
          <input
            type="text"
            name="fname"
            id="fname"
            onChange={(e) => update(e)} 
            placeholder="Enter your first name"
            className="inpBox"
            value={user.fname}
          />
          <p className="fieldhead">Last Name</p>
          <input
            type="text"
            name="lname"
            id="lname"
            onChange={(e) => update(e)} 
            value={user.lname}
            placeholder="Enter your last name"
            className="inpBox"
          />
          <p className="fieldhead">Email</p>
          <input
            type="email"
            name="email11"
            id="email"
            onChange={(e) => update(e)} 
            value={user.email}
            placeholder="Enter your email"
            className="inpBox"
          />
           <p className="fieldhead">PAN Number</p>
          <input
            type="text"
            name="pancard"
            id="pancard"
            onChange={(e) => update(e)} 
            value={user.pancard}
            placeholder="Enter your PAN number"
            className="inpBox"
          />
         
          <p className="fieldhead">Mobile No</p>
          <input
            type="Number"
            name="mobile"
            id="mobile"
            onChange={(e) => update(e)} 
            value={user.mobile}
            placeholder="Enter your phone number"
            className="inpBox"
          />
          <p className="fieldhead">Password</p>
          <input
            type="password"
            name="pass1"
            id="password"
            onChange={(e) => update(e)} 
            value={user.password}
            placeholder="Password"
            className="inpBox pass"
          />
          <p></p>

          <button type="submit" className="subBut">
            Sign up
          </button>
          <p className="refLink">
            Already have an account?
            <a href="/" className="pBut">Sign in</a>
            
          </p>
        </div>
      </form>
    </div>
  );}

export default Register
