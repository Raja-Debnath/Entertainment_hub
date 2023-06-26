const express = require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send('app is alive..')
})

app.listen(5001);
