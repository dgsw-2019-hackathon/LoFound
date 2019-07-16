const Router = require('koa-router');
const image = require('./image');
const uploadRouter = new Router();

uploadRouter.use('/image', image.routes());

module.exports = uploadRouter;
