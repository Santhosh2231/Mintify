import client from "twilio";
import Data from "../model/data.js";
import User from "../model/users.js";


export const sendOTP = async(req,res,next)=>{
    const client1 = client(process.env.ACCOUNTSID, process.env.AUTHTOKEN);
    const otp = req.body.otp;
    const receiver = "+91"+req.body.mobile;
    console.log(receiver)
    // '+917995855464'
    client1.messages
    .create({
        body: 'Dear Customer Your Otp for consent of Account Aggregator is '+ otp+'. The OTP is valid for 5 minutes only. Thanks, Team Mintify',
        from: '+18155545920',
        to: receiver
    })
    .then(message => {console.log(message.sid)
        console.log("Message sent")
    });
    res.status(200).send("OTP has sent been succesfully");
}

export const verifyOTP = async(req,res,next)=>{
    var updated_user;
    console.log(req.body.mobile);
    Data.findOne({ mobile: req.body.mobile }, function (err, res) {
        if(err) res.status(404).send("Something went wrong");
        User.findOne({mobile:req.body.mobile}, async (err1,res1)=>{
            if(err1) res.status(404).send("Something went wrong");
            console.log(res1);
            console.log(res._id);
            res1.income_data.push(res._id);
            updated_user = await User.findByIdAndUpdate(res1._id,res1,{new:true})
            console.log(updated_user);
        })
    });
    res.status(200).send(updated_user);
}
