require('dotenv').config();

const Koa = require('koa');
const cors = require('koa-cors');
const Router = require('koa-router');
const Body = require('koa-body')({ multipart: true });
const Http = require('http');
const colors = require('colors');
const static = require('koa-static');
const api = require('./api');

const port = 7777;

const app = new Koa();
const router = new Router();
const server = Http.createServer(app.callback());

// middleware
app.use(cors());
app.use(Body);

// API router
router.use(api.routes());

// Public
app.use(static('./public'));

// router init
app.use(router.routes());

server.listen(port, () => {
  console.log(`Server is listening to port ${colors.cyan(port)}`);
});

module.exports = server;
