const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');

const box = require('./routes/box_routes')
const db = require('./db_config/db_connection')

app.use(bodyParser.json())
app.use(cors())

app.use('/',box)

const port = 3000;


app.listen(port,()=>
{
    console.log("Express Server running on port" + " " + port)
})