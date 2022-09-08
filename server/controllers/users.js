import User from "../models/users.js"


export const updateUser = async (req,res,next)=>{
    
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const deleteUser = async (req,res,next)=>{
    try {
        await User.findByIdAndUpdate(req.params.id);
        res.status(200).json("Users Deleted");
    } catch (error) {
        next(error);
    }
}