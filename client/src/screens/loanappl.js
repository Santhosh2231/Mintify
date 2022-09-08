import React from 'react'
import Header from '../components/Header'

import Loan from '../components/loan/Loan'
import './consent.css'
import Home from './Home/Home'
function Loanappl() {
  return (
    <div>
      <div className='main1'>
      <Header/>

      <Loan />
    </div>
    </div>
  )
}

export default Loanappl
