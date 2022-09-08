import mongoose from "mongoose";
const {Schema} = mongoose;

const dataSchema = new mongoose.Schema({
    mobile:{
        type: Number,
        required: true,
        unique:true
    },
    details:{
        type:{
            Gender:{
                type:String
            },
            Married:{
                type:String
            },
            Dependent:{
                type:Number
            },
            Education:{
                type: String
            },
            Self_employeed:{
                type:String 
            },
            Applicant_income:{
                type:Number 
            }
        }
    },
    balance:{
        type:[{
            Bank:{
                type: String,
                required: true
            },
            currentAmount:{
                type: Number,
                required: true
            }
        }]
    },
    transactions:{
        type: [{
            bank:{
                type: String,
                required: true,
            },
            transType:{
                type: String,
                required: true,
            },
            amountCredited:{
                type: Number,
                required: true,
            },
            amountDebited:{
                type: Number,
                required: true,
            }
        }],
        required: true,
    },
    credit_score:{
        type:Number
    }
},{timestamps: true}
)

export default mongoose.model("Data",dataSchema);