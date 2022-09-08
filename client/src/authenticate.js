import React from 'react'
import './auth.css'
import fintech from './assets/fintech.webp'
import Login from './components/Login'
function Authenticate() {
  return (
    <div className='Main'>
    <div className='Div1'>
      <div>
            <img src={fintech} alt="fintech" className='img1' />
      </div>
    </div>
    <div className='Div2'>
    <Login/>
    </div>
  </div>
  )
}

export default Authenticate
