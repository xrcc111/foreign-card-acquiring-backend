const router = require('koa-router')()
const { getUserInfo } = require('../controller/test')
router.prefix('/users')

router.get('/', getUserInfo)


module.exports = router
