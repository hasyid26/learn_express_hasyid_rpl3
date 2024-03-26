const express =require('express')
const app =express()
const port = 3000

app.get('/',function(req,res) {
    res.send('hallo')
})

app.listen(port, function () {
    console.log('konek jing')
}) 