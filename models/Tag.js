const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,           // Specifies that the field is an integer
      allowNull: false,                 // Doesn't allow null values
      primaryKey: true,                 // Sets the field as the primary key
      autoIncrement: true                // Enables auto-increment for the field
    },
    tag_name: {
      type: DataTypes.STRING,            // Specifies that the field is a string
      allowNull: false,                  // Doesn't allow null values
      unique: true                       // Ensures that each tag name is unique
    }
  },
  {
    sequelize,
    timestamps: false,                  // Disables automatic timestamps (createdAt, updatedAt)
    freezeTableName: true,              // Prevents Sequelize from pluralizing the table name
    underscored: true,                  // Converts camelCase to snake_case for column names
    modelName: 'tag'                    // Sets the model name
  }
);

Tag.associate = (models) => {
  Tag.belongsToMany(models.Product, {
    through: models.ProductTag,
    foreignKey: 'tag_id',
  });
};


module.exports = Tag;