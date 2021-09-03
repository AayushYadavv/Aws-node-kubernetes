const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('<b>Hello there</b>')
    })
    
    app.listen(3000)
