const Router = require('koa-router');
const lostControl = require('./lost.ctrl');

const lostRouter = new Router();

lostRouter.get('/', lostControl.getLosts);

module.exports = lostRouter;