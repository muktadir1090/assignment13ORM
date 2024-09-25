// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id', // foreign key in Product table
  onDelete: 'CASCADE', // Deletes products if a category is deleted
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // foreign key in Product table
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // through model
  foreignKey: 'product_id', // foreign key in ProductTag table
});
// Tags belongToMany Products (through ProductTag)// Setting up associations
Tag.belongsToMany(Product, {
  through: ProductTag, // through model
  foreignKey: 'tag_id', // foreign key in ProductTag table
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
