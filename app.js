const  express=require('express')
const bodyparser=require('body-parser')
// const connection=require('./connection')

const app=express();

//adding comments
// var port=8000
app.use(bodyparser.json())

// app.use("/pepople",require('./routes/people'))
app.get('/',(req,res)=>{
    return res.send("App is running")
})
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port,host, () => {
    console.log(`Server running on Port - ${port}`);
    
  });