const express = require('express')
const sql = require('mssql')
const router = express.Router()


//routes
router.get('/',(req,res)=>{

    var config = {
        user: 'sa',
        password: 'pass',
        server: 'localhost', 
        database: 'calendar' 
    };
    sql.connect(config,(err)=>{
        if(err)console.log(err)
        console.log("Server connected to the databse")

        var request = new sql.Request()
        request.query('SELECT * FROM events',(err,record)=>{
            if(err)console.log(err)
            res.send(record)
        })
    })
})


//exports
module.exports = router