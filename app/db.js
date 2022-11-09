'use strict';

const mongoose = require('mongoose');
const config = require('config');

const dbURL = config.get('DB_URL');

if (!dbURL) {
  console.error('DB URL empty');
  process.exit(1);
}

async function connectToDB() {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Succefully Connected To DB');
  } catch (error) {
    console.log(error);
    // eslint-disable-next-line no-console
    console.error('Database Connection Failed');
    process.exit(1);
  }
}

connectToDB();


const db = mongoose.connection;


module.exports = db;
