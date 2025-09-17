const express = require("express");
const app = express();
app.post("/user/signup",function(req,res){
    res.json({
        msg:"function"
    })
})

app.post("/user/signin",function(req,res){
    res.json({
        msg:"function"
    })
})

app.get("/purchases",function(req,res){
    res.json({
        msg:"function"
    })
})

app.post("/course/purchase",function(req,res){
    res.json({
        msg:"function"
    })
})


app.get("/courses",function(req,res){
    res.json({
        msg:"function"
    })
})

