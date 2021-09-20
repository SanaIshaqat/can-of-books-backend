"use strict";
const bookModel=require("../models/Book.model");
const  AuthorModel=require("../models/Author.model")



let createBookController=(req,res)=>{
    let {name,books}=req.body;
    console.log(name);
    console.log(books);
    let newBook=new bookModel(books);
    newBook.save();
    let newAuthor=new AuthorModel({name:name,books:newBook});
newAuthor.save();
    res.json({"Response":newAuthor});
    }

    
module.exports=createBookController
