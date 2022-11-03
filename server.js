const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app);
const fs = require('fs')
const nunjucks = require('nunjucks')
const { Server } = require("socket.io");
const io = new Server(server);


nunjucks.configure("views",{express: app,noCache: true});
        
const data = fs.readFileSync('./user.json', 'utf-8');
const user = JSON.parse(data);
         
app.use(express.static("public"))

app.get("/", function(req,res){
    res.render('index.html')
})

io.on('connection', (socket) => {
    socket.on('polegar', (msg) => {
      const valor = msg
      user.polegar = valor
      fs.writeFileSync('./user.json', JSON.stringify(user, null, 2), 'utf-8');
      console.log("Valor enviado para polegar: "+msg)
    });
    socket.on('indicador', (msg) => {
        const valor = msg
        user.indicador = valor
        fs.writeFileSync('./user.json', JSON.stringify(user, null, 2), 'utf-8');
        console.log("Valor enviado para indicador: "+msg)
      });
      socket.on('medio', (msg) => {
        const valor = msg
        user.medio = valor
        fs.writeFileSync('./user.json', JSON.stringify(user, null, 2), 'utf-8');
        console.log("Valor enviado para medio: "+msg)
      });
      socket.on('anelar', (msg) => {
        const valor = msg
        user.anelar = valor
        fs.writeFileSync('./user.json', JSON.stringify(user, null, 2), 'utf-8');
        console.log("Valor enviado para anelar: "+msg)
      });
      socket.on('minimo', (msg) => {
        const valor = msg
        user.minimo = valor
        fs.writeFileSync('./user.json', JSON.stringify(user, null, 2), 'utf-8');
        console.log("Valor enviado para minimo: "+msg)
      });
      socket.on('todos', (msg) => {
        const valor = msg
        user.todos = valor
        fs.writeFileSync('./user.json', JSON.stringify(user, null, 2), 'utf-8');
        console.log("Valor enviado para todos: "+msg)
      });
});

app.get("/data", function(req,res){
    return res.json(user)
})

server.listen(3000)