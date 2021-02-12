const express = require('express')
const routes = require('./routes/routes')
const cors = require('cors')
const app = express()


//config
app.options('*', cors())
app.use(cors())


app.use(express.urlencoded({extended:true}))
app.use(express.json())

//ejs
app.set('view engine','ejs')

//routes
app.use('',routes)

//listen
const port  = process.env.PORT||3000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))