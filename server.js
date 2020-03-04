const express = require('express');

// connect to mongoDb
require('./config/connection');


const app = express();

// Define port in which to listen
const PORT = process.env.PORT || 3001;

// assign middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Require all external API routes
require('./routes/apiRoutes')(app);

// Start the server
app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
