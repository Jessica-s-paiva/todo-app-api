import express from 'express';
const app = express();

import {usuario} from './controller/usuario-controller.js'
usuario(app)

import {tarefa} from './controller/tarefa-controller.js'
tarefa(app)
//testando
app.listen(3000, () => console.log('funciona'))