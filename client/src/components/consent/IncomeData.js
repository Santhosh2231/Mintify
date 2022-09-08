import React, { useState,useEffect } from 'react'
import axios from 'axios';
import "./otp.css";

function IncomeData() {
    const data1 = JSON.parse(localStorage.getItem("user"));
    const mob = data1.data.mobile;
    // const [income_data, setIncome_data] = useState();
    axios.post("http://localhost:3001/api/data/",
    {
        mobile: mob,
    }
    ).then(res => {
    //   setIncome_data(res);
    localStorage.setItem("data",JSON.stringify(res));
    })
    var cont = JSON.parse(localStorage.getItem("data"));
    console.log(cont);
    var Name = data1.data.username;
    var Gender = cont.data[0].details.Gender;
    var Education = cont.data[0].details.Education;
    var Applicant_income = cont.data[0].details.Applicant_income;
    var balance = cont.data[0].balance;
    var transaction = cont.data[0].transactions;
    // balance
    var balance
    console.log(Name)
    return (
        <div className='box'>
        <div>
            <h2>Consent have submitted successfully</h2>
            <p>Name: {Name}</p>
            <p>Gender: {Gender}</p>
            <p>Education: {Education}</p>
            <p>Income: {Applicant_income}</p>

            <h3>Bank Details</h3>
            <h6>Bank Amount</h6>
            {balance.map((item,index)=>(
                <div className='balance' key={index}>
                    <p>{item.Bank} {item.currentAmount}</p>
                </div>
            ))}
            <h3>Transactions from your account</h3>
             <h6></h6>
            {transaction.map((item,index)=>(
                <div className='balance' key={index}>
                    <p><b>Transactions {index+1}</b></p>
                    <p>Bank: {item.bank}</p>
                    <p>Transaction Type: {item.transType}</p>
                    <p>Amount Credited: {item.amountCredited}</p>
                    <p>Amount Debited: {item.amountDebited}</p>
                </div>
            ))} 

        </div>
        </div>
    )
}

export default IncomeData