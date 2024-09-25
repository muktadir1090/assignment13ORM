const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,             // Disables automatic timestamps (createdAt, updatedAt)
    freezeTableName: true,         // Prevents Sequelize from pluralizing the table name
    underscored: true,             // Converts camelCase to snake_case for column names
    modelName: 'category'          // Sets the model name
  }
);

module.exports = Category;