


const express = require('express')
const sql = require('mssql')
const router = express.Router()
var config = {
    user: 'sa',
    password: '*Ankush@001',
    server: 'localhost', 
    database: 'calendar' 
};

function createConnection(res,query){
    sql.connect(config,(err)=>{
        if(err) throw err;
        request = new sql.Request()

        request.query(query,(err,result)=>{
            if(err) throw err;
            res.send(result)
           
        })
    })
}

//routes
router.get('/',(req,res)=>{
    let query = 'SELECT * FROM posts'
    createConnection(res,query)
        
})
router.post('/',(req,res)=>{
    let {title,description} = req.body
    let query = `INSERT INTO posts (title,[description],postDate) VALUES(N'${title}',N'${description}','${new Date().toDateString()}')`
    createConnection(res,query)

})

router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    let query = `DELETE FROM  posts WHERE id=${id}`
    createConnection(res,query)

})


//exports
module.exports = router