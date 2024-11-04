const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { connectToDb, getDb} = require('./db')
app.use(cors());

//db connection
connectToDb(()=>{
  if(!err){
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    db = getDb()
  }
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})


