const express = require("express");
const {chats} = require("./data/data")
const dotenv =require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
dotenv.config();

connectDB();

const app = express();

app.get("/",(req,resp)=>{
    resp.send("Api is Running");
})

app.use("/api/user",userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(5000,console.log(`server started ${PORT}`));