//Inportar dependencia
const express = require('express');
//iniciando a biblioteca importada
const server = express();
//Inportar do proprio node path que arruma os caminhos de diretorios de acordo com a maquina(linux, mac, windows)
const path = require('path');

const pages = require('./pages.js')

server
    // utilizando os arquivos estáticos
    .use(express.static('public'))
    //configurar o template engines
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //rota
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage);

//iniciar servidor
server.listen(5500);