const { SUCCESS } = require('../../response')
const query = require('../../sql')

async function getUserInfo(ctx) {
  const sql = 'SELECT * FROM user_info;'
  const result = await query(sql)
  SUCCESS(ctx, result)
}

module.exports = {
  getUserInfo,
}
