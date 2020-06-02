import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuarios');

  response.json([
    'Phelipe',
    'Cleiton', 
    'Diogo',
    'Leo'
  ]);
})

app.listen(3333);