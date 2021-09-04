const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('<b>Hello there  whatsup !!!!!!!!!!! ?</b>')
    })
    
    app.listen(3000)
