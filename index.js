const express = require('express')
const app = express()
require('dotenv').config()
 const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app._router.get("/login",(req,res)=>{
    res.send("<h1> I am still learning </h1>");
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})