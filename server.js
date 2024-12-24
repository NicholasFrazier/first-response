const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

app.use(cors());
app.use(bodyParser.json());

// Routes

app.get('/', (req, res) => {
    res.send('Welcome to the Event Coordination API!')

});

// start the server

app.listen(PORT, () => {
    console.log('Server is running on ${PORT}');
});