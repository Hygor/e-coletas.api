import express from 'express';

import PointsCtrl from './controllers/PointsCtrl';
import ItemsCtrl from './controllers/ItemsCtrl';

const routes = express.Router();
const pointsCtrl = new PointsCtrl();
const itemsCtrl = new ItemsCtrl();

routes.get('/items', itemsCtrl.index);

routes.get('/points', pointsCtrl.index);
routes.post('/points', pointsCtrl.create);
routes.get('/points/:id', pointsCtrl.show);

export default routes;