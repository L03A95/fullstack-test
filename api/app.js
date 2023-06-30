const express = require('express');
const router = require('./routes/index.js')
const { conn } = require('./db.js')

const server = express();
const port = 3001;

server.use('/', router)

conn.sync({ alter: true }).then(() => { //CAMBIAR A {alter: true} CUANDO TERMINE DE CREAR TODO EL BACKEND
    server.listen(port, () => {
      console.log(`%s listening at ${port}`); // eslint-disable-line no-console
    });
  });