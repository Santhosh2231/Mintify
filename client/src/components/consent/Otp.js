import React,{useState} from 'react'
import axios from 'axios';
import '../register/Register.css';
import IncomeData from './IncomeData';
import logo from "../../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";
import './otp.css'
import Consent1 from './Consent1';


function Otp() {
  const Navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  if(!user){
    Navigate("/");
  }
  const incomeLength = user.data.income_data.length;
  const mob = user.data.mobile;
    let randotp=1234;
    if (incomeLength==0) {
      return <Consent1 mobile={mob}  />;
    }
    return <IncomeData />;
    }



export default Otp
