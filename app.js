require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')

const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());




const router= require('./routes/loginRoutes')
const router2= require('./routes/quizRoutes')
const connection = require('./connection/connection')
const PORT = process.env.PORT || 8080
connection();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/',router);
app.use('/',router2);


app.listen(PORT, () => console.log(`Server is listrening on port: http://localhost:${PORT}`))