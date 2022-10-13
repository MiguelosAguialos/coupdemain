const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app);
const fs = require('fs')
const nunjucks = require('nunjucks')
const { Server } = require("socket.io");
const io = new Server(server);


nunjucks.configure("views",{express: app,noCache: true})
        
const data = fs.readFileSync('./user.json', 'utf-8');
const user = JSON.parse(data)
app.use('/', express.static(__dirname + '/public'));

app.get("/", function(req,res){
    res.render('index.html')
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      const valor = msg
      user.num = valor
      fs.writeFileSync('./user.json', JSON.stringify(user, null, 2), 'utf-8');
      console.log("Valor enviado: "+msg)
    });
});

app.get("/data", function(req,res){
    return res.json(user)
})

server.listen(3000)