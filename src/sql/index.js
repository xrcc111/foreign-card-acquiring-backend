const mysql = require('mysql')
const dbconfig = require('../../config')

// 创建数据库连接池  不知道为啥写进环境变量会报错
const pool = mysql.createPool({
  port: dbconfig.port,
  database: dbconfig.database,
  user: dbconfig.user,
  password: dbconfig.password
})

// 定义一个方法操作数据库导出
module.exports = function query(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}