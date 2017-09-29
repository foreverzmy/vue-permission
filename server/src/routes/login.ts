import * as Router from 'koa-router';

const router = new Router();
router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (username === '13588254457' && password === '123456') {
    ctx.status = 200;
    ctx.body = {
      success: true,
      token: '13588254457'
    }
  } else if (username === '17606546579' && password === '123456') {
    ctx.status = 200;
    ctx.body = {
      success: true,
      token: '17606546579'
    }
  } else {
    ctx.status = 401;
    ctx.body = {
      success: false,
      message: 'error'
    }
  }
  await next();
})

router.get('/islogin', async (ctx, next) => {
  const { token } = ctx.request.query;
  if (token === '13588254457') {
    ctx.status = 200;
    ctx.body = {
      success: true,
      username: 13588254457,
      routes: [{
        path: '/',
        children: [
          { path: 'bar' },
          { path: 'foo' }
        ]
      }]
    }
  } else if (token === '17606546579') {
    ctx.status = 200;
    ctx.body = {
      success: true,
      username: 17606546579,
      routes: [{
        path: '/',
        children: [
          { path: 'foo' }
        ]
      }]
    }
  }
  else {
    ctx.status = 401;
    ctx.body = {
      error: '用户未登录'
    }
  }
  await next();
})

export default router;
