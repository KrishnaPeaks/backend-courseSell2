const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose")
const { userRouter } = require("./user");
const { courseRouter } = require("./course");
const { adminRouter } = require("./admin");
app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/course",courseRouter);
async function main(){
await mongoose.connect("mongodb+srv://krishnaattop:26082006@cluster0.5wprheb.mongodb.net/course-sell")
app.listen(3000);
console.log("listening on port 3000")
}
main()


