const {Router} = require("express")
const userRouter = Router();
const {userModel}=require("./db")

    userRouter.post("/signup",async function(req,res){
        const { email,password,firstName,lastname}=req.body;
        await userModel.create({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastname
        })
    res.json({
        msg:"signup suceeded"
    })
})

    userRouter.post("/signin",function(req,res){
    res.json({
        msg:"function"
    })
})

    userRouter.get("/purchases",function(req,res){
    res.json({
        msg:"function"
    })
})

module.exports = {
    userRouter : userRouter
}