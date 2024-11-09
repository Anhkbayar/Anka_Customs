const express = require('express')
const cors = require('cors')
const connect = require('./db')
const path = require('path')
const userRouter = require("./routes/userRoute")
const bodyParser = require('body-parser')

const app = express()
const port = 3000
connect()

app.use(cors());
app.use(bodyParser.json())
app.use("/", userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})




