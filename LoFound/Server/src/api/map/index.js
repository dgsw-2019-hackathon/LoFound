const Router = require('koa-router');
const mapCtrl = require('./map.ctrl');
const mapRouter = new Router();

mapRouter.post('/', mapCtrl.addMap);
mapRouter.get('/placeId', mapCtrl.getPlaceId);
mapRouter.get('/getLocation', mapCtrl.getLocationByPlaceId);

module.exports = mapRouter;
