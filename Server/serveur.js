const express = require("express");

const app = express()

const morgan = require('morgan')

const cors = require('cors')
const path = require('path');
const mongoose = require("mongoose")

const port = process.env.PORT || 3000;

const mongoURI = "mongodb+srv://forum:DVKwQY0XdEDhszQg@cluster0.9qd99.mongodb.net/Forum2021?retryWrites=true&w=majority"

app.use(express.json())

app.use(cors())

app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send("hello 13")
})

app.use("/inscription",require(path.join(__dirname,"./routes/Inscription.js")))
app.use("/blogs",require(path.join(__dirname,"./routes/blogs.js")))


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) =>
    console.log("connected to database"),
    app.listen(port, () => {
        console.log(`runinig on port ${port}`)
    }
    )

).catch(err => {
    console.log("error")
})