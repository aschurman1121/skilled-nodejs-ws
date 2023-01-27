const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const logger = require('./utils/logger')

//connect the env file
dotenv.config({ path:'./config/config.env' })

//invoke DB?
connectDB();

//initalize the express app
const app = express();

//creating a port
const PORT = process.env.PORT || 5001;

app.use(logger)

//creating the server 
const server = app.listen(PORT, () => {
    console.log(`server is listening on on PORT ${PORT}`)
})





//gracefully shuts down reject
process.on('unhandle rejection', (err) => {
    console.log(`error: ${err.message}`)
    //kills server - 1 indicates failure
    server.close(() => process.exit(1))
})