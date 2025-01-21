const express = require('express');
const app = express();
const authenticate = require('./auth');

app.use(authenticate);

app.get('/api/flags', (req, res) => {
  // Retorne as bandeiras aqui
});

app.listen(3000, () => {
  console.log('Servidor iniciado');
});