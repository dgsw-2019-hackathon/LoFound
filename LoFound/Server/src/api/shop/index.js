const Router = require('koa-router');
const shopCtrl = require('./shop.ctrl');

const shopRouter = new Router();

shopRouter.get('/item', shopCtrl.getItem);
shopRouter.post('/buy', shopCtrl.buyItem);

module.exports = shopRouter;