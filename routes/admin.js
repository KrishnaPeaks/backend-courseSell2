const { Router} = require("express");
const adminRouter = Router();
const {adminModel}=require("./db")
const jwt = require("jsonwebtoken")
const {JWT_ADMIN_PASSWORD} = require("../config.js")
    adminRouter.post("/signup", async function(req,res){
     const { email,password,firstName,lastname}=req.body;
        await adminModel.create({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastname
        })
    res.json({
        msg:"signup suceeded"
    })
})
    
    adminRouter.post("/signin",async function(req,res){
    const {email,body} = req.body;
        const admin = await adminModel.findOne({
            email:email,
            password:password
        })
        if(admin){
            const token = jwt.sign({
                id: admin._id
            },JWT_ADMIN_PASSWORD);
       
        res.json({
        token:token
    })}else{
        res.status(403).json({
            msg:"incorrect credentials"
        })
        }
})

    adminRouter.post("/course",adminMiddlewear,async function(req,res){
        const adminId = req.userId;
        const {title,description,imageUrl,price} = req.body;
        const course = await courseModel.create({
            title,description,imageUrl,price,creatorId:adminId
        })
    res.json({
        msg:"course created",
        courseId: course._id 
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