import express from "express";
import { train_dataset } from "./train_dataset.js";
import { train_label } from "./train_labels.js";
import Data from "../model/data.js";
import KNN from "ml-knn";
export const checkEligibility = async(req,res,next)=>{
    var knn = new KNN(train_dataset, train_label, { k: 5 });

    const mob = req.body.mobile;
    console.log(mob);
    const data = await Data.findOne({mobile:mob});
    console.log(data);
    var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;
    if(data.details.Gender=="Male"){
        a=1;
    }
    if(data.details.Married=="Yes"){
        b=1;
    }
    if(data.details.Dependent==1){
        c=1
    }else{
        c=2
    }
    if(data.details.Education=="Graduate"){
        d=1;
    }if(data.details.Self_employeed=="Yes"){
        e=1;
    }
    f = data.details.Applicant_income;
    g = 0;
    h = req.body.amount;
    i = req.body.tenure*12;
    j = data.credit_score;
    k = 1;
    // tenure,salary,amount,purpose

    var test_dataset = [a,b,c,d,e,f,g,h,i,j,k]
    var ans = knn.predict(test_dataset);
    var result="";
    if(ans==1){
        result="Eligible";
    }else{
        result="Not Eligible";
    }
    res.status(200).json({"status":result})
}
