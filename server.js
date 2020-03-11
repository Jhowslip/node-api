//Import
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//Iniciar App
const app = express();
//Permissão para Json
app.use(express.json());
app.use(cors());


//Iniciar DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');

//Rotas
app.use('/api', require("./src/routes"));

//Selecionar Porta de Navegação
app.listen(3001);