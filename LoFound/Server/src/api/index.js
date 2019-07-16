const Router = require('koa-router');

const apiRouter = new Router();
const auth = require('./auth');
const map = require('./map');

apiRouter.use('/auth', auth.routes());
apiRouter.use('/map', map.routes());

module.exports = apiRouter;
