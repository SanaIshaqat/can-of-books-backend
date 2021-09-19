'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose=require("mongoose");
app.use(cors());
const PORT = process.env.PORT;
const MONGO_SERVER=process.env.MONGO_SERVER;
// const seedBook=require("./models/Book.model");
const seedAuthor=require("./models/Author.model");
const authorController=require('./controllers/author.controller');
// const getAuthorController=require('./controllers/author.controller');
mongoose.connect(`${MONGO_SERVER}/Books`,{useNewUrlParser:true,useUnifiedTopology:true});

// app.get('/seed-data', (request, response) => {
//   seedAuthor();

//   response.json({"Message":"Book Obj Created Successfully"})

// })
app.get('/get-data',authorController);
// app.get('/get-author',getAuthorController);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
