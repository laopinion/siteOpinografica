'use strict'

const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const request = require('request');
// const mailgun = require("mailgun-js");

require('dotenv').config();
const app = express();

const api_key = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN_NAME;

const mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

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
  // console.log(req.body)
  const emailUser = req.body.correo;
  const htmlBody = `<html> 
                      <div> <strong> Nombre:</strong> ${req.body.nombre}</div>
                      <div> <strong> País:</strong> ${req.body.pais}</div>
                      <br>
                      <div> <strong> Mensaje:</strong> ${req.body.mensaje}</div>
                    </html>`;

  // var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.token}&remoteip=${req.connection.remoteAddress}`;
  // console.log(verificationUrl)
  request(verificationUrl, function(error, response, body) {
    body = JSON.parse(body);
    // Success will be true or false depending upon captcha validation.
    if(body.success !== undefined && !body.success) {
      return res.json({'responseCode' : 1, 'message' : 'Failed captcha verification'});
    } 

    /*const data = {
      from: emailUser,
      to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
      subject: 'Contacto opinografica web',
      text: 'Testing some Mailgun awesomness!'
    };*/
    const data = {
      from: emailUser,
      to: 'web@johnserrano.co',
      subject: 'Contacto opinografica web',
      html: htmlBody
    };

    mailgun.messages().send(data, function (error, body) {
      if (error) res.status(500).send({ responseCode: 1, message: 'Algo salio mal' });

      console.log(`Sending email message: ${body.message} with id: ${body.id}`);
      res.status(200).send({ responseCode: 0, message: 'Success'});
      // res.json({'responseCode' : 0, 'responseDesc' : 'Sucess'});
    });
  });
});

app.listen(8080, function () {
  console.log('Server listening on port 8080!');
});
