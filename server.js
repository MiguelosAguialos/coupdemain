const express = require('express')
const server = express()
const fs = require('fs')
const nunjucks = require('nunjucks')
nunjucks.configure("views",{express: server,noCache: true})
        
const data = fs.readFileSync('./user.json', 'utf-8');
const user = JSON.parse(data)
         
server.use(express.static('public'))

const valor = 0

server.get("/", function(req,res){
    res.render('index.html', {valor})
    user.num +=1
    fs.writeFileSync('./user.json', JSON.stringify(user, null, 2), 'utf-8');
    console.log(user)
})
server.get("/data", function(req,res){
    user.num +=1
    fs.writeFileSync('./user.json', JSON.stringify(user, null, 2), 'utf-8');
    return res.json(user)
})

console.log('server run port 3000');
server.listen(3000)