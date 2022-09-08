import React from 'react'
import {useNavigate} from "react-router-dom";
function Logout() {
    const Navigate = useNavigate();
    localStorage.removeItem("user");
    localStorage.removeItem("data");
    Navigate("/",{replace:true});
  return (
    <>

    </>
  )
}

export default Logout