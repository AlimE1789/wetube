
import express from "express" // == const express = require('express') // require is take ('') from Node Module.
import morgan from "morgan"
import helmet from "helmet"

const app = express()
const port = 4000
 
// babel_grammar
const handleListening = (req,res) => console.log(`Listening on : http://localhost:${port}`)
const handleHome = (req,res) => res.send("Hello from Home")
const handleProfile = (req,res) => res.send("You are on my profile") 
const betweenHome = (req, res, next) => {
    console.log("Between")
    next()
}
//node_grammer
//
// function handleListening(){
//     console.log(`Listening on : http://localhost:${port}`)
// }
//
// function handleHome(req,res){
//     res.send("Hello from Home")
// }
//
//function handleProfile(req,res){
// res.send("You are on my profile")
//}

 
// app.use(betweenHome) // <== middleware 단 코딩. 코딩 순서가 중요!!
app.use(helmet())
app.use(morgan("dev")) // <== use morgan 

const middlewareEnd = (req,res,next) => {
    res.send("not happening")
}

app.get("/",middlewareEnd,handleHome)
app.get("/profile",handleProfile)
app.listen(port,handleListening)
// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))