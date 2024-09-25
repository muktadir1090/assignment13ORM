const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
// import sequelize connection

const categoryRoutes = require('./routes/api/category-routes');
const productRoutes = require('./routes/api/product-routes');
const tagRoutes = require('./routes/api/tag-routes');

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/tags', tagRoutes);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}!`));
});
