const jwt = require("jsonwebtokens")
const {JWT_ADMIN_PASSWORD} = require("../config.js")
function adminMiddlwear(req,res,next){
   const token = req.headers.token;
   const decoded = jwt.verify(token,JWT_ADMIN_PASSWORD)
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
    adminMiddlwear:adminMiddlwear
}