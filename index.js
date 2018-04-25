/* SETUP */
const express = require('express');
const app = express();

const production = 'production' === process.env.NODE_ENV;
const port = process.env.PORT || 3000;

const morgan = require('morgan');
if (!production) {
  app.use(morgan('dev'));
}

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

/* ROUTING */
const mainRoutes = require('./src/routes/main');
app.use('/', mainRoutes);

/* SERVER LISTEN */
app.listen(port, startListening);

function startListening() {
  if (!production) {
    console.log('Server available on http://localhost:' + port);
  }
}
