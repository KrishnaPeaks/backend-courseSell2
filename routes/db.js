const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect("mongodb+srv://krishnaattop:26082006@cluster0.5wprheb.mongodb.net/coursera-app")
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
        email: {type:String,unique:true},
        password: String,
        firstName:String,
        lastName:String,

});

const adminSchema = new Schema({
    email: {type:String,unique:true},
        password: String,
        firstName:String,
        lastName:String,

});

const courseSchema = new Schema({
        title:String,
        description:String,
        price:Number,
        imagURl:String,
        creatorId:ObjectId
});

const purchaseSchema = new Schema({
        UserId:ObjectId,
        courseId:ObjectId,
});

const userModel = mongoose.model("user",userSchema)
const adminModel = mongoose.model("admin",adminSchema)
const courseModel = mongoose.model("course",courseSchema)
const purchaseModel = mongoose.model("purchase",purchaseSchema)

module.export={
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
}