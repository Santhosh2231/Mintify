import Income_data from "../model/data.js";


export const getData = async(req,res,next)=>{
    try {
        const data = await Income_data.find({mobile:req.body.mobile});
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}



