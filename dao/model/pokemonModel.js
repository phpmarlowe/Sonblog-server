const { sequelize, DataTypes } = require("../dbConnect");

module.exports = sequelize.define(
  "Pokemon",
  {
    id: {
      //全国图鉴序号
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    id_str: {
      //全国图鉴
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      //中文名称
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_en: {
      //英文名称
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_jp: {
      //日文名称
      type: DataTypes.STRING,
      allowNull: true,
    },
    height: {
      //身高
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      //体重
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type1: {
      //第一属性
      type: DataTypes.STRING,
      allowNull: true,
    },
    type2: {
      //第二属性
      type: DataTypes.STRING,
      allowNull: true,
    },
    ability1: {
      //特性一
      type: DataTypes.STRING,
      allowNull: true,
    },
    ability2: {
      //特性二
      type: DataTypes.STRING,
      allowNull: true,
    },
    abilityHide: {
      //隐藏特性
      type: DataTypes.STRING,
      allowNull: true,
    },
    ability1_desc: {
      //特性一描述
      type: DataTypes.STRING,
      allowNull: true,
    },
    ability2_desc: {
      //特性二描述
      type: DataTypes.STRING,
      allowNull: true,
    },
    abilityHide_desc: {
      //隐藏特性描述
      type: DataTypes.STRING,
      allowNull: true,
    },
    generation: {
      //时代
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    catchRate: {
      //捕捉概率（满HP情况下使用普通球）
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc: {
      //宝可梦描述
      type: DataTypes.STRING,
      allowNull: true,
    },
    chain: {
      //进化链
      type: DataTypes.STRING,
      allowNull: true,
    },
    stat: {
      //种族值，分别为 HP,攻击,防御,特攻,特防,速度
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true, createdAt: false, updatedAt: false }
);
