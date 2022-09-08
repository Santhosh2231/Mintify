import React,{useState} from 'react'
import logo from "../../assets/logo.jpeg";
import axios from 'axios';
import "./otp.css";
import { userInfo } from 'os';

export default function Consent1(props) {
  var len = JSON.parse(localStorage.getItem("user")).data.income_data.length;
  const [otpSent,setotpSent] = useState(false);
  const [otpCopy,setOtpCopy] = useState();
  const [consent,setConsent] = useState(false);
  if(len>0){
    setConsent(true);
  }
  function getOTP(e) {
    e.preventDefault();
    setotpSent(true);

    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 5; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    var randotp = Number(OTP);
    setOtpCopy(randotp);
    axios.post("http://localhost:3001/api/otp/",
      {
        mobile: props.mobile,
        otp: randotp
      }
    ).then(res => console.log(res))
  }
  const [otpVeri,setOtpVeri] = useState();
  function update(e) {
    setOtpVeri(e.target.value)
  }
  function verify(e){
    e.preventDefault();
    if(otpCopy!=otpVeri){

    }else{
      axios.post("http://localhost:3001/api/otp/verify",
      {
        mobile:props.mobile
      }
    ).then(res => {console.log(res);
      localStorage.setItem("user",JSON.stringify(res));
      setConsent(true);
      
    }
    )
    }
  }
  if(consent==false){

  
    if (otpSent==false) {
      return (
        <>
                  <div className="MainLogin">

          <form
            onSubmit={getOTP}
          >
            <div id="Signup">
              <img src={logo} alt="logo" className="lgo" />
              <h2 className="logintitle">Consent Page</h2>
              <p className="subhead">Please provide your consent for further application</p>
              <p className="fieldhead">
                You are agreeing to share the following information with us:
              </p>
              <ul>
                <li>Bank Details</li>
                <li>Investments</li>
                <li>Transactions</li>
                <li>Deposits</li>
              </ul>

              <input
                type="checkbox"
                name="fname"
                id="fname"
              /><span>I have read and understood the above terms and conditions and I give access to the things specified above.</span>
              <p></p>
              <button type="submit" className="subBut">
                Get Otp
              </button>
              </div>
                </form>
              </div>


                </>
              )
      }else{
        return (
          <div className='box'>
          <form onSubmit={verify}>

        
            <input
              type="text"
              name="fname"
              id="fname"
              onChange={(e) => update(e)} 
              placeholder="Enter your OTP"
              className="inpBox"
              value={otpVeri}
              
            /> 
            <button type="submit" className="subBut">
                Verify
          </button>
          </form>
          </div>
        )
      }
  }else{
    return (
      <>
        <h2>Consent succesfully done.</h2>
      </>
    )
  }
}
