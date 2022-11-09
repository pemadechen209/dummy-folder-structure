'use strict';

require('dotenv').config();
const config = require('config');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

require('./app/db');

const PORT = process.env.NODE_PORT || 3000;
const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routes')(app);

const onServerStart = () => {
  const ENVIROINMENT = process.env.NODE_ENV || 'development';
  const message = `Server Listening On Port ${PORT}, ENVIRONMENT=${ENVIROINMENT}`;
  // eslint-disable-next-line no-console
  console.log(message);
};

app.listen(PORT,  onServerStart);
