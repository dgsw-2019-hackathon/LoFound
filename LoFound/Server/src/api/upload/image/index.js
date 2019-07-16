const Router = require('koa-router');

const image = new Router();
const imageCtrl = require('./image.ctrl');

image.post('/', imageCtrl.uploadImage);

module.exports = image;
