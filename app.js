var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config();  // To load environment variables from the .env file

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const gridRouter = require('./routes/grid');
const pickRouter = require('./routes/pick');
const herb = require('./models/herb');

var app = express();

// MongoDB connection setup (updated)
const connectionString = process.env.MONGO_CON; // Retrieve connection string from .env file

mongoose.connect(connectionString)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grid', gridRouter);
app.use('/selector', pickRouter);

var resourceRouter = require('./routes/resource'); // Ensure this path is correct

app.use('/resource', resourceRouter);  // Route for all resource-related requests

app.get('/herbs', (req, res) => {
  const results = [
    { herb_name: 'Basil', description: 'A fragrant herb used in Italian cuisine', uses: 'Used in cooking, teas, and as garnish' },
    { herb_name: 'Mint', description: 'A cooling herb commonly used for its medicinal properties', uses: 'Used for digestive problems and skin care' },
    { herb_name: 'Rosemary', description: 'A woody herb known for its strong aroma', uses: 'Used in roasting meats, flavoring soups, and in aromatherapy' }
  ];
  res.render('herbs', { results }); // Pass results to Pug
});

// Resource Route
app.get('/resource', (req, res) => {
  res.send('Resource page');
});

app.get('/resource/herbs', async (req, res) => {
  try {
    const herbs = await herb.find();
    res.json(herbs); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch herbs" });
  }
});

app.post('/resource/herbs', async (req, res) => {
  try {
    const newherb = new herb(req.body);
    await newherb.save();
    res.status(201).json({ message: 'herb created successfully', herb: newherb });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Failed to create herb" });
  }
});

// General Error Handling Route (for unknown routes)
app.use(function(req, res, next) {
  next(createError(404)); // Trigger 404 error if route doesn't match
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // Show detailed error in dev environment
  res.status(err.status || 500);
  res.render('error'); // Render error page
});

module.exports = app;
