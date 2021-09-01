const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('<b>Hello</b>')
    })
    
    app.listen(3000 || process.env.port)