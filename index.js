const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('<b>Hello there Aayush Here</b>')
    })
    
    app.listen(3000)
