
import React from 'react';
import Authenticate from './authenticate';
import Otp from './components/consent/Otp';
import Consent from './screens/consent';
import Home from './screens/Home/Home';
import Signup from './screens/Signup/Signup';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Loanappl from './screens/loanappl';
import Loginp from './screens/loginpg';
import Logout from './components/logout/logout';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Loginp />} />
      <Route path="signup" element={<Signup  />} />
      <Route path="home" element={<Home />} />
      <Route path="consent" element={<Consent />} />
      <Route path="loan" element={<Loanappl/> } />
      <Route path="/logout" element={<Loginp/> } />
      
    </Routes>
  </div>
  );
}

export default App;
