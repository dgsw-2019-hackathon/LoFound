module.exports = async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  await next();
}
