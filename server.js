'use strict'

const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const request = require('request');

require('dotenv').config();
const app = express();

app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use(express.static('public'));// Files css, js etc

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use("*", function(req, res) {
//   res.status(404).send('404');
// });

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cotizar', (req, res) => {
  res.render('cotizar');
});

app.post('/contacto', (req, res) => {
  const secretKey = process.env.SECRETKEYRECAPTCHA;
  console.log(req.body)
  // req.connection.remoteAddress will provide IP address of connected user.
  // var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.token}&remoteip=${req.connection.remoteAddress}`;
  console.log(verificationUrl)
  request(verificationUrl, function(error, response, body) {
    body = JSON.parse(body);
    // Success will be true or false depending upon captcha validation.
    if(body.success !== undefined && !body.success) {
      return res.json({'responseCode' : 1,'responseDesc' : 'Failed captcha verification'});
    }

    res.json({'responseCode' : 0,'responseDesc' : 'Sucess'});
  });
});

app.listen(8080, function () {
  console.log('Server listening on port 8080!');
});
