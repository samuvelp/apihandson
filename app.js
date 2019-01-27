const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 2000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true,
}))

app.get("/",(req,res)=>{
    res.json({Intro:'Node js, express and postgres api'})
})

app.get('/users',db.getUsers)

app.get(`/users/:id`,db.getSingleUser)

app.post(`/users`,db.createUser)

app.listen(port,()=>{
    console.log(`app is running on ${port}`)
})