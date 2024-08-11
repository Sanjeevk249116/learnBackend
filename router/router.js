const express = require("express");
const routers = express.Router();

routers.get("/", (req,res)=>{
    res.send("hello worlds")
});

module.exports = { routers };
