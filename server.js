'use strict';
// const seedAuthor=require("./models/Author.model");
// const seedBook=require("./models/Book.model");
// const getAuthorController=require('./controllers/author.controller');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose=require("mongoose");
app.use(cors());
const PORT = process.env.PORT;
const MONGO_SERVER=process.env.MONGO_SERVER;
app.use(express.json());


const authorController=require('./controllers/author.controller');
const createBookController=require('./controllers/book.controller');


mongoose.connect(`${MONGO_SERVER}`,{useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.post('/create-book',createBookController);

app.get('/seed-data', (request, response) => {
  seedAuthor();

  response.json({"Message":"Book Obj Created Successfully"})

})
app.get('/get-data',authorController);
// app.get('/get-author',getAuthorController);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
