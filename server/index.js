const express = require("express");
const {chats} = require("./data/data")

const dotenv =require("dotenv");
dotenv.config();


const app = express();

app.get("/",(req,resp)=>{
    resp.send("Api is Running");
})

app.get("/api/chats",(req,resp)=>{
    resp.send(chats);
})

app.get("/api/chats/:id",(req,resp)=>{
    // resp.send(req.params.id);
    const singleChat = chats.find((c)=> c._id === req.params.id);
    resp.send(singleChat);
})

const PORT = process.env.PORT || 5000;
app.listen(5000,console.log("server started"));