const Router = require('koa-router');

const apiRouter = new Router();
const auth = require('./auth');
const map = require('./map');
const losts = require('./losts');

apiRouter.use('/auth', auth.routes());
apiRouter.use('/map', map.routes());
apiRouter.use('/losts', losts.routes());

module.exports = apiRouter;
