const express = require("express");
const router = express.Router();
const connection=require('../connection')




router.get("/",(req,res)=>{
    connection.query("SELECT * from test2",(err,rows,peoples)=>{
        if(!err){
            return res.send(rows)
        }else{
            console.log("error in fetching details")
        }

    })

})
//delete
router.delete("/delete/:id",(req,res)=>{
    connection.query("DELETE FROM test2 WHERE id = ?",[req.params.id],(err,rows,peoples)=>{
        if(!err){
            return res.send("Deleted successfully")
        }else{
            console.log("error in fetching details")
        }

    })

})
//insert
router.post("/insert",(req,res)=>{


    var sql =  'INSERT INTO test2 SET ?';;  
var values = req.body
    connection.query(sql,[values],(err,rows,peoples)=>{
        if(!err){
            return res.send("Inserted successfully")
        }else{
            console.log("error in fetching details")
        }

    })

})

////update
router.put("/update/:id",(req,res)=>{


    var sql = "UPDATE test2 SET ? WHERE id= ?"; 
    req.body.Phone=parseInt(req.body.Phone)
var values = req.body
    connection.query(sql,[values,req.params.id],(err,rows,peoples)=>{
        if(!err){
            return res.send("updated successfully")
        }else{
            console.log(err)
        }

    })

})
module.exports=router