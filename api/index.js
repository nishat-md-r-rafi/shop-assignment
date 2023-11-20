const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const userRouter = require("./routes/user")
const itemRouter = require("./routes/item")
const authRouter = require("./routes/auth")
dotenv.config()
const app = express()
const PORT = 5000 || process.env.PORT 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mqo07.mongodb.net/shop-assignment?retryWrites=true&w=majority`;


mongoose.connect(uri)
                    .then(() => {  console.log("Connected to mongodb Atlas!")})
                    .catch(() => {  console.log("Error in connection to DB!")})


// middlewares                       
app.use(cors())
app.use(express.json()) 
app.use("/users", userRouter)
app.use("/items", itemRouter)
app.use("/auth", authRouter)

// error handling


app.listen(PORT, () => {  
    console.log(`server is running port ${PORT}`)
})
