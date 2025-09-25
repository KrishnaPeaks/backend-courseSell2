const jwt = require("jsonwebtokens")
const {JWT_USER_PASSWORD} = require("../config.js")
function userMiddlwear(req,res,next){
   const token = req.headers.token;
   const decoded = jwt.verify(token,JWT_USER_PASSWORD)
   if (decoded){
    req.userId = decoded.id;
    next()
   }
   else{
    res.status(404).json({
        msg:"You are not signed in "
    })
   }
}
module.exports = {
    userMiddlwear:userMiddlwear
}