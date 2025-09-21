const {Router} = require("express")
const userRouter = Router();
const {userModel}=require("./db")
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "123passforuser"

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

    userRouter.post("/signin",async function(req,res){
        const {email,password} = req.body;
        const user = await userModel.findOne({
            email:email,
            password:password
        })
        if(user){
            const token = jwt.sign({
                id: user._id
            },JWT_USER_PASSWORD);
       
        res.json({
        token:token
    })}else{
        res.status(403).json({
            msg:"incorrect credentials"
        })
        }
    })

    userRouter.get("/purchases",function(req,res){
    res.json({
        msg:"function"
    })
})

module.exports = {
    userRouter : userRouter
}