//Constante instanciando o pacote npm express;
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
//Constante instanciando a função express;
const app = express();
app.use(express.json());
app.use(cors());
//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/apinode',
    { useNewUrlParser: true }
);
requireDir('./src/models');

app.use('/api', require('./src/routes'));

//listando o app com a porta localhost:3001
app.listen(3001);