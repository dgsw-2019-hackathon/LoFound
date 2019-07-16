const Router = require('koa-router');
const tokenMiddleware = require('../middleware/auth');

const apiRouter = new Router();
const auth = require('./auth');
const map = require('./map');
const losts = require('./losts');
const upload = require('./upload');

apiRouter.use('/auth', auth.routes());
apiRouter.use('/map', map.routes());
apiRouter.use('/losts', losts.routes());
apiRouter.use('/upload', upload.routes());

module.exports = apiRouter;
