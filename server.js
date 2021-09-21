'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose=require("mongoose");
app.use(cors());
const PORT = process.env.PORT;
const MONGO_SERVER=process.env.MONGO_SERVER;
//To recieve body from POST Method
app.use(express.json());

const {seedAuthor,AuthorModel}=require("./models/Author.model");
const {authorController,createBookController,deleteBookController,updateBookController}=require('./controllers/author.controller');

mongoose.connect(`${MONGO_SERVER}`,{useNewUrlParser:true,useUnifiedTopology:true});

app.get('/seed-data', (request, response) => {
  seedAuthor();
  response.json({"Message":"Book Obj Created Successfully"})
});

app.get('/get-data',authorController);
app.post('/create-book',createBookController);
app.delete('/delete-book/:id',deleteBookController);
app.put('/update-data/:id',updateBookController);



app.listen(PORT, () => console.log(`listening on ${PORT}`));
