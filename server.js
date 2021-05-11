const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./dist/fullpedido'))

app.get('/*',(req,res)=>
    res.sendFile('index.html',{root:'dist/fullpedido/'}),
);

app.listen(process.env.PORT || 8080)