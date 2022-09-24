const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes= require('./routes/userRoutes')
var cors = require('cors')

dotenv.config()



const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/user",userRoutes)


const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URI).then(app.listen(port, () => console.log(`server running on ${port}`))).catch((error) => console.log(error.message))


