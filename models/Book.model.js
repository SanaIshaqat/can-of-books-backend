'use strict';
const mongoose=require("mongoose");
//title
//description
//status
//email
const bookSchema= new mongoose.Schema({
    title:String,
    description:String,
    status:String,
    email:String
})

const bookModel=mongoose.model('book',bookSchema);

// let seedBook=()=>{
//     let newBook=new bookModel({
//         title:'To Kill a Mockingbird',
//     description:'Published in 1960, this timeless classic explores human behaviour and the collective conscience of The Deep South in the early 20th century.',
//     status:'Available',
//     email:'sanaishaqat@gmail.com',
//     }
//     );
//     newBook.save();
// }
// module.exports=seedBook;
module.exports=bookSchema;