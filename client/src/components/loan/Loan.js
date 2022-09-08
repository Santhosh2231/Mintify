import React,{useState} from 'react'
import axios from 'axios';
import './Loan.css'
import logo from "../../assets/logo.jpeg";
function Loan() {
      var mob = JSON.parse(localStorage.getItem("user"))
      const [result,setResult] = useState("");
      mob = mob.data.mobile;
      const [user,setUser]=useState({
        tenure: '',
        amount: '',
        salary: '',
        purpose:'',
        occupation:'',
        colateral:''

      })
      function update(e) {
        const newUser = {...user}
        newUser[e.target.id]=e.target.value
        setUser(newUser)
        console.log(newUser)
      }
      function signUp(e) {
        e.preventDefault()
        axios.post("http://localhost:3001/api/checkLoan/",
            {
            tenure:user.tenure,
            salary:user.salary,
            purpose: user.purpose,
            ammount: user.amt  ,
            mobile:mob    
          }
            ).then(res => {
              setResult("Eligible")
            })
        }
      
      
  function changeTxt() {
      user.tenure=''
      user.amt=''
      user.purpose=''
      user.salary=''
      user.occup=''
      user.colat=''
  }
  if(result==""){
    return (
      <div className="MainLogin2">
        <form onSubmit={(e)=> signUp(e)}>
          <div id="Signup2">
            <img src={logo} alt="logo" className="lgo2" />
            <h2 className="logintitle2">Loan Application</h2>
            <p className="subhead2">Please fill the form below</p>
            <p className="fieldhead">Occupation</p>
            <input
              type="text"
              name="occup"
              id="occup"
              onChange={(e) => update(e)} 
              placeholder="Enter you Occupation"
              className="inpBox"
              value={user.fname}
            />
            <p className="fieldhead">Tenure</p>
            <input
              type="text"
              name="tenure"
              id="tenure"
              onChange={(e) => update(e)} 
              value={user.lastname}
              placeholder="Enter Tenure for loan"
              className="inpBox"
            />
            <p className="fieldhead">Amount</p>
            <input
              type="text"
              name="amt"
              id="amt"
              onChange={(e) => update(e)} 
              value={user.email}
              placeholder="Enter Amount"
              className="inpBox"
            />
            <p className="fieldhead">Purpose</p>
            <input
              type="text"
              name="purpose"
              id="purpose"
              onChange={(e) => update(e)} 
              value={user.pancard}
              placeholder="Enter purpose"
              className="inpBox"
            />
          
            <p className="fieldhead">Salary</p>
            <input
              type="number"
              name="salary"
              id="salary"
              onChange={(e) => update(e)} 
              value={user.mobno}
              placeholder="Enter your salary"
              className="inpBox"
            />
            <p className="fieldhead">Proposed Collaterals</p>
            <input
              type="text"
              name="colat"
              id="colat"
              onChange={(e) => update(e)} 
              value={user.password}
              placeholder="Enter Collateral's name"
              className="inpBox pass"
            />
            <p></p>

            <button type="submit" className="subBut">
              Submit
            </button>
          
              
          </div>
        </form>
      </div>
    );
    }else{
      return (
        <div>
            <h2>Your are Eligible for the Loan</h2>
        </div>
      )
      
    }
}

export default Loan
