const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
  })
  next()
})

router.get('/info', async (ctx) => {
  const { num } = ctx.query
  console.log(num)
  ctx.body = {
    qq: '18755603174',
    birth: '1999-09-16'
  }
})

router.post('/permission', async (ctx) => {
  console.log(ctx.request.body)
  ctx.body = {
    msg: 'success',
    data: {
      name: 'admin',
      age: 10,
      sex: 'male',
      status: false,
    }
  }
})

router.post('/submit', async (ctx) => {
  const { name, age, sex, status, qq, birth } = ctx.request.body
  ctx.body = {
    name,
    age,
    sex,
    status,
    qq,
    birth,
    tag: 'success'
  }
})
module.exports = router
