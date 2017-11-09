'use strict'

const express = require('express');
const app = express();
const hbs = require('express-handlebars');

app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use(express.static('public'));// Files css, js etc

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cotizar', (req, res) => {
  res.render('cotizar');
});

app.listen(8080, function () {
  console.log('Server listening on port 8080!');
});
