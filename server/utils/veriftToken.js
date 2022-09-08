import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401,"You are not authenticated"));
    }
    jwt.verify(token,process.env.SECRETKEY,(err,user)=>{
        if(err) next(createError(403,"Token is not valid"));
        req.user = user;
        next();
    });
}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id){
            next();
        }else{
            if(err) next(createError(403,"You are not authorized"));
        }
    })
}
