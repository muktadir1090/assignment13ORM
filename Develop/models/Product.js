const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,           // Specifies that the field is an integer
      allowNull: false,                 // Doesn't allow null values
      primaryKey: true,                 // Sets the field as the primary key
      autoIncrement: true                // Enables auto-increment for the field
    },
    product_name: {
      type: DataTypes.STRING,            // Specifies that the field is a string
      allowNull: false                    // Doesn't allow null values
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),    // Specifies a decimal with precision 10 and scale 2
      allowNull: false,                   // Doesn't allow null values
      validate: {
        isDecimal: true                   // Validates that the value is a decimal
      }
    },
    stock: {
      type: DataTypes.INTEGER,            // Specifies that the field is an integer
      allowNull: false,                   // Doesn't allow null values
      defaultValue: 10,                   // Sets a default value of 10
      validate: {
        isNumeric: true                   // Validates that the value is numeric
      }
    },
    category_id: {
      type: DataTypes.INTEGER,            // Specifies that the field is an integer
      allowNull: false,                   // Doesn't allow null values
      references: {
        model: 'category',                 // The name of the model to reference
        key: 'id'                          // The key in the referenced model
      },
      onUpdate: 'CASCADE',                // Optional: updates related records if the category id changes
      onDelete: 'SET NULL'                // Optional: sets the category_id to NULL if the referenced category is deleted
    }
  },
  {
    sequelize,
    timestamps: false,                   // Set to true if you want createdAt and updatedAt fields
    freezeTableName: true,               // Prevents Sequelize from pluralizing the table name
    underscored: true,                   // Converts camelCase to snake_case for column names
    modelName: 'product'                 // Sets the model name
  }
);

module.exports = Product;
