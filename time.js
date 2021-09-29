const time=(req,res,next)=>{
    var today= new Date();
    var heure=today.getHours();
    var jour=today.getDay();
    if (heure>6 && heure<17&& jour>=1 &&jour<6){
        
    next();} else{
    res.send("come back tomorrow");
}}
module.exports=time