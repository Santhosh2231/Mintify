import React from 'react'

import Login from '../components/Login'
import './loginp.css'
import fintech from '../assets/fintech.webp'
function Loginp() {
      
  return (
      <div className='Main1'>
      <div className='Div11'>
      <img src={fintech} alt="logo"  className='fint'/>
      </div>
      <div className='Div21'>
      <Login/>
      </div>
      </div>
  )
}

export default Loginp
