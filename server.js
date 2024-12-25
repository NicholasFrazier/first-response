const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const eventRoutes = require('./routes/eventRoutes');



require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

app.use(cors());
app.use(bodyParser.json());

// Routes

app.get('/', (req, res) => {
    res.send('Welcome to the Event Coordination API!')

app.use('/auth', authRoutes);
app.use('/resources', resourceRoutes);
app.use('/events', eventRoutes);
    

});

// start the server

app.listen(PORT, () => {
    console.log('Server is running on ${PORT}');
});