import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true
    },
    mobile:{
        type: Number,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    },
    pancard:{
        type: String,
        required: true,
        unique:true
    },
    income_data:{
        type:[String],
    }
},{timestamps: true}
)

export default mongoose.model("User",userSchema);