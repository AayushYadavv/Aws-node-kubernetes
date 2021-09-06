const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('<b>Hello there , Aayush Yadav here !1</b>')
    })
    
    app.listen(3000)
