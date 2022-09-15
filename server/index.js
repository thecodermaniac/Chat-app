const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()


const app = express()
app.use(express.json())


const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URI).then(app.listen(port, () => console.log(`server running on ${port}`))).catch((error) => console.log(error.message))


