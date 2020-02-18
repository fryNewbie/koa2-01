// 中间件集中调用
const bodyParser = require("koa-bodyparser"); //引用koa-bodyparser
const path = require("path"); //path为文件路径处理模块
const staticFile = require("koa-static"); //静态文件中间件
const multer = require("koa-multer"); //中间件实现文件上传，multer不会处理任何非multipart/form-data类型的表单数据

module.exports = app => {
  app.use(bodyParser());
  app.use(staticFile(path.join(__dirname + "/public"))); //静态文件服务
  // app.use(multer({ dest: "./upload/" }));
};
