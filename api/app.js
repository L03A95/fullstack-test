const express = require('express');
const router = require('./routes/index.js')
const { conn } = require('./db.js');
const { urlencoded } = require('body-parser');

const server = express();
const port = 3001;

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/', router)

conn.sync({ force: true }).then(() => { //CAMBIAR A {alter: true} CUANDO TERMINE DE CREAR TODO EL BACKEND
    server.listen(port, () => {
      console.log(`%s listening at ${port}`); // eslint-disable-line no-console
    });
  });