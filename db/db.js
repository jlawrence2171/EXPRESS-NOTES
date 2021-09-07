require("dotenv").config()

const mongoose = require("mongoose")
const config = {
    useUnifiedTopology: true
}


const { MONGODBURI } = process.env

mongoose.connect(MONGODBURI, config)

mongoose.connection
    .on("open", ()=> console.log("Notes DB is Connected to Mongo"))
    .on("close", ()=> console.log("Mongo Connection is Closed"))
    .on("error", (error) => console.log(error))