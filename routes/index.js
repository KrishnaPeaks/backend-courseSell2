const express = require("express");
const app = express();
const { userRouter } = require("./user");
const { courseRouter } = require("./course");
const { adminRouter } = require("./admin");
app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/course",courseRouter);
app.listen(3000);

