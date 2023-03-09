// 数据库相关配置
const dbconfig = {
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
}
module.exports = dbconfig
