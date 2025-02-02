const { Model, DataTypes } = require("sequelize");
const { Product } = require("./Product");
const { Tag } = require("./Tag");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: Product,
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: Tag,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
