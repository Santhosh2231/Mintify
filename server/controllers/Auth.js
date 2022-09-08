import User from "../model/users.js";
import bcrypt from "bcryptjs";
// import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt)
        const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            mobile:req.body.mobile,
            pancard:req.body.pancard,
            password:hash
        })
        await newUser.save();
        res.status(200).send("User has been Created");
    } catch (error) {
        next(error);
    }
}

export const login = async(req,res,next)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        console.log(user);
        if(!user) return next(createError(404,"User Not Found!!"));

        const isPassword = await bcrypt.compare(req.body.password,user.password);
        if(!isPassword) return next(createError(400,"Invalid Credentials"));

        // JSONWEBTOKEN Creation
        const token = jwt.sign({id:user._id},process.env.SECRETKEY);

        const {password, ...otherDetails} = user._doc;
        
        // Sending Cookies
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(otherDetails);
    } catch (error) {
        next(error);
    }
}