require("dotenv").config()
const express = require("express")
const connectToDB = require("./src/db/db")

connectToDB()
const app = require("./src/app")

app.use(express.json())


app.listen(3000, ()=> console.log("Server is running on Port 3000."))