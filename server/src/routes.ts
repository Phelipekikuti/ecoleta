import express from 'express';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//buscar listagem dos usuarios
routes.get('/items', itemsController.index);

//cadastra pontos de coleta
routes.post('/points', pointsController.create);

//lista ponto especifico
routes.get('/points/:id', pointsController.show);

//filtra pontos
routes.get('/points', pointsController.index);

export default routes;
