import React from 'react'
import Otp from '../components/consent/Otp'
import Header from '../components/Header'
import Loan from '../components/loan/Loan'
import './consent.css'
import Home from './Home/Home'

function Consent() {
  return (
    <div className='main1'>
      <Header/>
      <Otp/>
      {/* <Loan /> */}
    </div>
  )
}

export default Consent
