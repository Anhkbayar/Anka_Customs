const express = require("express")
const userModel = require("../models/usermodel");
const userRouter = express.Router()



// Handling login request
userRouter.post("/login", async (req, res, next) => {
    console.log(req.body)
    res.send("This is the login request")
})
userRouter.post("/register", async (req, res, next) => {
    const user = await userModel.create({
        username: req.body.username,
        password: req.body.password
    })
    
    console.log(user)
    res.send("This is the register request")
})

module.exports = userRouter