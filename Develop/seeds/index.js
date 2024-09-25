const sequelize = require('../config/connection');
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');



const seedAll = async () => {
  try {
    await sequelize.sync({ force: true }); // This recreates the database
    console.log('Database synced!');

    await seedCategories();
    console.log('Categories seeded!');

    await seedProducts();
    console.log('Products seeded!');

    await seedTags();
    console.log('Tags seeded!');

    process.exit(0); // End the script
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedAll();
