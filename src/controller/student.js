const model = require("../../model");
const { Op } = require("sequelize"); //引入操作枚举Ops
const Student = model.Student;

module.exports = {
  allStudent: async (ctx, next) => {
    try {
      let result = await Student.findAll();
      if (result) {
        ctx.body = {
          code: 200,
          data: result
        };
      } else {
        ctx.body = {
          code: 200,
          message: "表中没有数据"
        };
      }
    } catch (e) {
      ctx.body = {
        code: 500,
        message: "服务器错误 "
      };
    }
  },
  findStudent: async (ctx, next) => {
    let { sid } = ctx.params;
    let result = await Student.findAll({
      where: {
        sid: {
          [Op.eq]: `${sid}`
        }
      }
    });
    ctx.body = {
      code: 200,
      data: result
    };
  },
  create: async (ctx, next) => {
    const data = ctx.request.body;
    Student.create(data);
    ctx.body = "操作完成 ";
  }
};
