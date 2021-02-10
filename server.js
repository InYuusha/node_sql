const express = require('express')
const routes = require('./routes/routes')
const app = express()


//config


//routes
app.use('',routes)

//listen
const port  = process.env.PORT||3000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))