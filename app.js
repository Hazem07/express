const express=require("express");
const time = require("./time");



const app=express();
app.use(time);
// app.get("/",(req,res)=>{

//     res.sendFile(__dirname+"/views/index.html");
// });
app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/views/index.html");
});
app.get("/about",(request,response)=>{
    response.sendFile(__dirname+"/views/about.html");
});
app.get("/style.css",(request,response)=>{
    response.sendFile(__dirname+"/views/style.css");
});
const port=5959;

// app.listen(port, (err)=>
// err?console.log(err): console.log("server run")
// )
app.listen(port);