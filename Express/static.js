const express = require('express'); // Import Express
const app = express(); // Create an Express application

// Middleware to serve static files
app.use(express.static('public'));

// Catch-all route for undefined paths
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
