const express = require('express');
const app = express();
const port = 4000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});