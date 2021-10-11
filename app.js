const  express=require('express')
const app=express();


var port=8000
app.get('/',(req,res)=>{
    return res.send("App is running")
})
app.listen(port, () => {
    console.log(`Server running on Port - ${port}`);
    
  });