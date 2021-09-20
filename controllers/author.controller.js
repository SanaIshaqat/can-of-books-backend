"use strict";
const AuthorModel=require("../models/Author.model")

let authorController=(req,res)=>{
 AuthorModel.find().then (data=>{
     res.json(data);
 })
}



module.exports=authorController

