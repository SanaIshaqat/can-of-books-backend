"use strict";
const AuthorModel=require("../models/Author.model")

let authorController=(req,res)=>{
 AuthorModel.find().then (books=>{
     res.json(books);
 })
}

// let getAuthorController=(req,res)=>{
//     let authorId=req.query.id
//     AuthorModel.findOne({_id:authorId}).then (data=>{
//         res.json(data);
//     })
//    }

module.exports=authorController
// module.exports=getAuthorController
