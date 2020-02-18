const Sequelize = require("sequelize");
const config = require("./config");
const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.username,
  config.mysql.password,
  {
    dialect: "mysql", // 数据库使用mysql
    host: config.mysql.host, //数据库服务ip
    port: config.mysql.port, //数据库运行端口
    timestamp: true, // 这个参数为true是MySQL会自动给每条数据添加createdAt和updateAt字段
    quoteIdentifiers: true, //设置为false时Postgres中会使表名和属性大小写不敏感，并跳过双引号
    logging: true // 执行过程会log一些SQL的logging，设为false不显示
  }
);

//对连接进行测试，查看控制台
sequelize
  .authenticate()
  .then(() => {
    console.log("******数据库连接连接成功.********");
    // console.log("******测试结束，即将退出！！！********");
    //  process.exit(); //结束进程
  })
  .catch(err => {
    console.error(
      "***************Unable to connect to the database:***********",
      err
    );
  });

//暴露
module.exports = sequelize;
