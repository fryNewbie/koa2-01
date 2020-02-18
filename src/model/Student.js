const Sequelize = require("sequelize");
const sequelize = require("../../config/db");
const Student = sequelize.define(
  "student",
  {
    id: {
      type: Sequelize.INTEGER(10), // 数据类型
      allowNull: false, // 是否为 null
      primaryKey: true, // 是否为 主键
      autoIncrement: true // 是否 自动填值
    },
    sid: {
      type: Sequelize.STRING(50)
    },
    name: {
      type: Sequelize.STRING(100)
    }
  },
  {
    //timestamps: false, //禁止创建CreateAt和UpdateAt字段,
    //tableName: "my_student" //修改创建的数据表的名称为my_student
  }
);
//创建表，默认是false，true则是删除原有表，再创建
Student.sync({
  force: false
});

module.exports = Student;
