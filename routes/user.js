const {Router} = require("express")
const userRouter = Router();
const {userModel}=require("./db")

    userRouter.post("/user/signup",function(req,res){
    res.json({
        msg:"function"
    })
})

    userRouter.post("/user/signin",function(req,res){
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