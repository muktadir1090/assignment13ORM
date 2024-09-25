const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,           // Specifies that the field is an integer
      allowNull: false,                 // Doesn't allow null values
      primaryKey: true,                 // Sets the field as the primary key
      autoIncrement: true                // Enables auto-increment for the field
    },
    product_id: {
      type: DataTypes.INTEGER,           // Specifies that the field is an integer
      allowNull: false,                  // Doesn't allow null values
      references: {
        model: 'product',                 // References the Product model
        key: 'id'                         // References the id column in the Product model
      },
      onUpdate: 'CASCADE',               // Optional: updates related records if the product id changes
      onDelete: 'CASCADE'                // Optional: deletes this record if the referenced product is deleted
    },
    tag_id: {
      type: DataTypes.INTEGER,           // Specifies that the field is an integer
      allowNull: false,                  // Doesn't allow null values
      references: {
        model: 'tag',                     // References the Tag model
        key: 'id'                         // References the id column in the Tag model
      },
      onUpdate: 'CASCADE',               // Optional: updates related records if the tag id changes
      onDelete: 'CASCADE'                // Optional: deletes this record if the referenced tag is deleted
    }
  },
  {
    sequelize,
    timestamps: false,                  // Disables automatic timestamps (createdAt, updatedAt)
    freezeTableName: true,              // Prevents Sequelize from pluralizing the table name
    underscored: true,                  // Converts camelCase to snake_case for column names
    modelName: 'product_tag'            // Sets the model name
  }
);

module.exports = ProductTag;
