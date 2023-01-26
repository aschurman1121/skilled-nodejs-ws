const express = require('express')
const dotenv = require('dotenv')

//initalize the express app
const app = express();

//creating a port
const PORT = process.env.PORT || 5001;

//creating the server 
const server = app.listen(PORT, () => {
    console.log(`server is listening on on PRT ${PORT}`)
})

