const {Router} = require("express");

const courseRouter = Router();
    courseRouter.post("/course/purchase",function(req,res){
    res.json({
        msg:"function"
    })
})


    courseRouter.get("/courses",function(req,res){
    res.json({
        msg:"function"
    })
})

module.exports = {
      courseRouter : courseRouter
}