const { Router} = require("express");
const adminRouter = Router();
const {adminModel}=require("./db")

    adminRouter.post("/signup",function(req,res){
    res.json({
        msg:"function"
    })
})
    
    adminRouter.post("/signin",function(req,res){
    res.json({
        msg:"function"
    })
})

    adminRouter.post("/course",function(req,res){
    res.json({
        msg:"function"
    })
})

adminRouter.put("/course",function(req,res){
    res.json({
        msg:"function"
    })
})

adminRouter.get("/course/bulk",function(req,res){
    res.json({
        msg:"function"
    })
})

module.exports = {
    adminRouter : adminRouter
}

