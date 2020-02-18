const router = require("koa-router")();
const HomeController = require("../src/controller/home");
const StudentController = require("../src/controller/student");
module.exports = app => {
  router.get("/", HomeController.index);

  router.get("/home", HomeController.home);

  router.get("/home/:id/:name", HomeController.homeParams);

  router.get("/user", HomeController.login);

  router.post("/user/register", HomeController.register);

  /** 对student表的操作 */

  router.get("/student", StudentController.allStudent);

  router.get("/student/:sid", StudentController.findStudent);

  router.post("/student/create", StudentController.create);

  app.use(router.routes()).use(router.allowedMethods());
};
