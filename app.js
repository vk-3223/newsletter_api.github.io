const express = require("express")
const app = express()
const request = require("request")
const bodyparser = require("body-parser")

app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html")
})
app.post("/",function(req,res){
    var firstname = req.body.first
    var secondname = req.body.second
    var email = req.body.third
    console.log(firstname,secondname,email)
})
app.listen(3000,function(){
    console.log("server runing")
})