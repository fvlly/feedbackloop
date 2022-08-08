const express = require('express')

const app = express()


app.get('/',(req,res)=>{
    res.send({
        'name': "nonymous dev"
    })
})


const PORT = process.env.PORT|| 5000

app.listen(PORT,()=>{
    console.log('App is up and running on PORT:',PORT);
})