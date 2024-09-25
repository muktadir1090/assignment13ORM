const express = require('express');
const sequelize = require('./config/connection'); // Import sequelize connection
const routes = require('./routes'); // Import all routes

const app = express(); // Initialize the Express application
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes for the API
app.use( routes); // Integrate all API routes under the /api path

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});