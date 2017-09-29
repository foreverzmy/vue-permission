import * as Koa from 'koa';
import * as http from 'http';
import * as Router from 'koa-router';
import * as bodyparser from 'koa-bodyparser';

import login from './src/routes/login';

const app = new Koa();
const server = http.createServer(app.callback());
const router = new Router({
  prefix: '/api',
});

// logger
app.use(async (ctx, next) => {
  console.time(`${ctx.method} ${ctx.url}`);
  await next();
  console.timeEnd(`${ctx.method} ${ctx.url}`);
})

app
  .use(bodyparser())
  .use(router.routes())
  .use(router.allowedMethods())

router
  .use('/auth', login.routes(), login.allowedMethods())

export default server;
