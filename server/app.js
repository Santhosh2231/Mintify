import Express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import incomeRoute from "./routes/data.js";
import loanEligibile from "./routes/loan.js";
import cookieParser from "cookie-parser";
import OTPRoute from "./routes/otp.js";
dotenv.config();

const app = Express();
app.use(cors());
const connect = async()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/mintify",{useNewUrlParser: true});
        console.log("Connected to mongodb");
    } catch (error) {
        throw error;
    }
    
}
mongoose.connection.on("disconnected",()=>{
    console.log("Server disconnected");
})

mongoose.connection.on("connected",()=>{
    console.log("Server connected");
})


// Middlewares.
app.use(cookieParser())
app.use(Express.json());

app.use("/api/Auth",authRoute);
app.use("/api/data",incomeRoute);
app.use("/api/checkLoan",loanEligibile)
app.use("/api/otp",OTPRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something Went wrong!!";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
})


app.listen(3001,()=>{
    connect();
    console.log("server listening at port: 3001");
})